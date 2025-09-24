import React, { useState, useEffect, useRef } from 'react';
import ProductGallery from '../components/ProductGallery';
import OrderForm from '../components/OrderForm';
import InfoSection from '../components/InfoSection';
import FaqAccordion from '../components/FaqAccordion';
import Cart from '../components/Cart';
import { galleryImages, faqs, otherProducts, shapes } from '../constants';
import { StickerShape, CartItem } from '../types';
import { ResetIcon } from '../components/Icons';

declare const fabric: any;

const ImagePreview: React.FC<{ imageUrl: string; shape: StickerShape; onClear: () => void; }> = ({ imageUrl, shape, onClear }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fabricCanvasRef = useRef<any>(null);
    const imageRef = useRef<any>(null);
    const shapeOverlayRef = useRef<any>(null);

    useEffect(() => {
        const canvasSize = 384;
        const canvas = new fabric.Canvas(canvasRef.current, {
            width: canvasSize,
            height: canvasSize,
            backgroundColor: '#f3f4f6'
        });
        fabricCanvasRef.current = canvas;

        canvas.on('object:moving', (e: any) => {
            const obj = e.target;
            if (!obj) return;

            obj.setCoords();

            const boundingRect = obj.getBoundingRect();
            const canvasWidth = canvas.getWidth();
            const canvasHeight = canvas.getHeight();
            
            const offsetX = obj.left - boundingRect.left;
            const offsetY = obj.top - boundingRect.top;

            let newBoundLeft = boundingRect.left;
            const minBoundLeft = Math.min(0, canvasWidth - boundingRect.width);
            const maxBoundLeft = Math.max(0, canvasWidth - boundingRect.width);
            if (newBoundLeft < minBoundLeft) {
                newBoundLeft = minBoundLeft;
            } else if (newBoundLeft > maxBoundLeft) {
                newBoundLeft = maxBoundLeft;
            }
            
            let newBoundTop = boundingRect.top;
            const minBoundTop = Math.min(0, canvasHeight - boundingRect.height);
            const maxBoundTop = Math.max(0, canvasHeight - boundingRect.height);
            if (newBoundTop < minBoundTop) {
                newBoundTop = minBoundTop;
            } else if (newBoundTop > maxBoundTop) {
                newBoundTop = maxBoundTop;
            }
            
            obj.set({
                left: newBoundLeft + offsetX,
                top: newBoundTop + offsetY,
            });
        });

        return () => {
            canvas.dispose();
        };
    }, []);

    useEffect(() => {
        const canvas = fabricCanvasRef.current;
        if (!canvas) return;

        canvas.getObjects().forEach((obj: any) => {
            if (obj !== shapeOverlayRef.current) {
                canvas.remove(obj);
            }
        });

        imageRef.current = null;
        canvas.renderAll();

        if (imageUrl) {
            fabric.Image.fromURL(imageUrl, (img: any) => {
                const canvasWidth = canvas.getWidth();
                const canvasHeight = canvas.getHeight();
                
                const scale = Math.min(
                    (canvasWidth * 0.9) / (img.width || 1),
                    (canvasHeight * 0.9) / (img.height || 1)
                );

                img.set({
                    scaleX: scale,
                    scaleY: scale,
                    originX: 'center',
                    originY: 'center',
                    borderColor: '#1f2937',
                    cornerColor: '#1f2937',
                    cornerSize: 10,
                    transparentCorners: false,
                    cornerStyle: 'circle'
                });

                canvas.add(img);
                canvas.centerObject(img);
                canvas.setActiveObject(img);
                imageRef.current = img;

                if (shapeOverlayRef.current) {
                    canvas.bringToFront(shapeOverlayRef.current);
                }

                canvas.renderAll();
            }, { crossOrigin: 'anonymous' });
        }
    }, [imageUrl]);

    useEffect(() => {
        const canvas = fabricCanvasRef.current;
        if (!canvas) return;

        if (shapeOverlayRef.current) {
            canvas.remove(shapeOverlayRef.current);
            shapeOverlayRef.current = null;
        }

        if (canvas.wrapperEl) {
            canvas.wrapperEl.style.borderRadius = '';
            canvas.wrapperEl.style.filter = '';
        }
        canvas.clipPath = null;

        let shapeObject = null;
        const canvasSize = canvas.getWidth();
        const padding = 8;
        const shapeDimension = canvasSize - padding * 2;

        const commonShapeProps = {
            fill: 'transparent',
            stroke: '#4b5563',
            strokeWidth: 2,
            strokeDashArray: [8, 4],
            selectable: false,
            evented: false,
            originX: 'center',
            originY: 'center',
            top: canvasSize / 2,
            left: canvasSize / 2,
        };

        switch (shape.name) {
            case 'Circle':
                shapeObject = new fabric.Circle({
                    ...commonShapeProps,
                    radius: shapeDimension / 2,
                });
                break;
            case 'Square':
                shapeObject = new fabric.Rect({
                    ...commonShapeProps,
                    width: shapeDimension,
                    height: shapeDimension,
                });
                break;
            case 'Rounded Corners':
                shapeObject = new fabric.Rect({
                    ...commonShapeProps,
                    width: shapeDimension,
                    height: shapeDimension,
                    rx: shapeDimension / 8,
                    ry: shapeDimension / 8,
                });
                break;
            case 'Contour Cut':
                break;
        }
        
        if (shapeObject) {
            canvas.add(shapeObject);
            canvas.bringToFront(shapeObject);
            shapeOverlayRef.current = shapeObject;
        }
        
        canvas.renderAll();
    }, [shape]);

    const handleReset = () => {
        const img = imageRef.current;
        const canvas = fabricCanvasRef.current;
        if (img && canvas) {
            const canvasWidth = canvas.getWidth();
            const canvasHeight = canvas.getHeight();

            const scale = Math.min(
                (canvasWidth * 0.9) / (img.width || 1),
                (canvasHeight * 0.9) / (img.height || 1)
            );

            img.set({
                scaleX: scale,
                scaleY: scale,
                angle: 0,
            });
            canvas.centerObject(img);
            img.setCoords();
            canvas.renderAll();
        }
    };

    return (
        <div className="w-full sticky top-28 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center bg-gray-100 rounded-2xl p-8">
                <canvas ref={canvasRef} />
            </div>
            
            <div className="w-full max-w-md mt-6 p-4 bg-gray-50 border rounded-lg shadow-inner">
                 <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">Use controls to scale, rotate, and pan.</p>
                    <button
                        onClick={handleReset}
                        className="text-sm font-semibold text-gray-700 hover:text-black transition flex items-center gap-1 px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                        <ResetIcon className="h-4 w-4" />
                        Reset
                    </button>
                </div>
            </div>

            <p className="text-center text-sm mt-4 text-gray-500 max-w-md">
                This is a preview. Your sticker will be cut precisely to your design's shape.
            </p>
            <button
                onClick={onClear}
                className="mt-4 text-sm font-semibold text-red-600 hover:text-red-800 transition"
            >
                Remove Image
            </button>
        </div>
    );
};

const DieCutDesigner: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedShape, setSelectedShape] = useState<StickerShape>(shapes[0]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: Omit<CartItem, 'id'>) => {
    const newItem = { ...item, id: Date.now().toString() + Math.random().toString() };
    setCartItems(prevItems => [...prevItems, newItem]);
    setIsCartOpen(true);
  };
  
  const handleRemoveFromCart = (id: string) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />
      <main className="flex-grow">
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row -mx-8">
              <div className="w-full lg:w-1/2 px-8">
                {uploadedImage ? (
                    <ImagePreview imageUrl={uploadedImage} shape={selectedShape} onClear={() => setUploadedImage(null)} />
                ) : (
                    <ProductGallery images={galleryImages} />
                )}
              </div>
              <div className="w-full lg:w-1/2 px-8 mt-8 lg:mt-0">
                <OrderForm 
                    uploadedImage={uploadedImage}
                    setUploadedImage={setUploadedImage}
                    selectedShape={selectedShape}
                    setSelectedShape={setSelectedShape}
                    onAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div>
        
        <InfoSection />

        <div id="faq" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="mb-8 lg:mb-0">
                        <h2 className="text-3xl font-extrabold text-gray-900">Die Cut Stickers FAQ</h2>
                        <p className="mt-4 text-lg text-gray-500">Looking for answers? Check out these related questions or dive into our support section for more insights.</p>
                    </div>
                    <div className="lg:col-span-2">
                        <FaqAccordion faqs={faqs} />
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Looking for something else?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Our materials have been hand chosen by our team to ensure the highest quality, here are some great products with different ways to utilize them.</p>
                </div>
                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {otherProducts.map((product) => (
                        <a key={product.name} href="#" className="block group">
                            <div className="relative aspect-[4/5] w-full bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2400ms] group-hover:scale-110" src={product.image} alt={product.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white">
                                    <h3 className="text-yellow-400 text-lg font-bold uppercase">{product.category}</h3>
                                    <p className="text-3xl font-extrabold mt-1">{product.name}</p>
                                    <p className="mt-2 text-lg">{product.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>

      </main>
    </div>
  );
};

export default DieCutDesigner;