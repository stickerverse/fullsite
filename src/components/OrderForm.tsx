import React, { useState } from 'react';
import { shapes, materials, finishes, sizes, quantities } from '../constants';
import { ChevronDownIcon, StarIcon } from './Icons';
import { StickerShape, Material, StickerSize, QuantityOption, CartItem } from '../types';

interface OrderFormProps {
    uploadedImage: string | null;
    setUploadedImage: (image: string | null) => void;
    selectedShape: StickerShape;
    setSelectedShape: (shape: StickerShape) => void;
    onAddToCart: (item: Omit<CartItem, 'id'>) => void;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp'];
const ALLOWED_FILE_TYPES_STRING = ALLOWED_FILE_TYPES.join(',');

// Sub-components defined outside OrderForm to prevent re-creation on re-renders
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h3 className="text-xl font-extrabold text-gray-900 mb-3">{title}</h3>
);

interface RadioListProps<T> {
  options: T[];
  selected: T;
  setSelected: (option: T) => void;
  nameKey: keyof T;
  valueKey: keyof T;
  iconKey?: keyof T;
  className?: string;
  itemClassName?: (isSelected: boolean) => string;
}

const RadioList = <T extends object,>(
  { options, selected, setSelected, nameKey, valueKey, iconKey, className, itemClassName }: RadioListProps<T>
) => (
  <ul className={`bg-white rounded-lg ${className}`}>
    {options.map((option, index) => {
      const isSelected = selected[valueKey] === option[valueKey];
      return (
        <li key={String(option[valueKey])}>
          <label className={`flex items-center p-3 cursor-pointer transition-colors duration-200 ${itemClassName ? itemClassName(isSelected) : (isSelected ? 'bg-gray-200' : 'hover:bg-gray-100')} ${index === 0 ? 'rounded-t-lg' : ''} ${index === options.length - 1 ? 'rounded-b-lg' : ''}`}>
            <input
              type="radio"
              name={String(nameKey)}
              value={String(option[valueKey])}
              checked={isSelected}
              onChange={() => setSelected(option)}
              className="absolute opacity-0 w-0 h-0"
            />
            {iconKey && <img src={String(option[iconKey])} alt={String(option[nameKey])} className="w-9 h-9 mr-3" />}
            <span className={`font-semibold ${isSelected ? 'text-black' : 'text-gray-700'}`}>{String(option[nameKey])}</span>
          </label>
        </li>
      );
    })}
  </ul>
);

const OrderForm: React.FC<OrderFormProps> = ({ uploadedImage, setUploadedImage, selectedShape, setSelectedShape, onAddToCart }) => {
    const [selectedMaterial, setSelectedMaterial] = useState<Material>(materials[0]);
    const [selectedFinish, setSelectedFinish] = useState<string>(finishes[0]);
    const [selectedSize, setSelectedSize] = useState<StickerSize>(sizes[0]);
    const [selectedQuantity, setSelectedQuantity] = useState<QuantityOption>(quantities[0]);
    const [uploadState, setUploadState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [uploadError, setUploadError] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setUploadError(null);
        setUploadState('loading');

        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
            setUploadError('Invalid file type. Please use PNG, JPG, GIF, or SVG.');
            setUploadState('error');
            event.target.value = '';
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setUploadError(`File is too large. Max size is ${MAX_FILE_SIZE / 1024 / 1024}MB.`);
            setUploadState('error');
            event.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setUploadedImage(reader.result as string);
            setFileName(file.name);
            setUploadState('success');
        };
        reader.onerror = () => {
            setUploadError('There was an error reading the file.');
            setUploadState('error');
            event.target.value = '';
        };
        reader.readAsDataURL(file);
    };
    
    const handleRemoveImage = () => {
        setUploadedImage(null);
        setFileName(null);
        setUploadState('idle');
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) {
            fileInput.value = '';
        }
    };

    const handleAddToCartClick = () => {
        onAddToCart({
            shape: selectedShape,
            material: selectedMaterial,
            finish: selectedFinish,
            size: selectedSize,
            quantity: selectedQuantity,
            image: uploadedImage,
        });
    };

    return (
        <div className="space-y-8">
            <div>
                <span className="text-lg font-bold text-gray-800">Custom Stickers</span>
                <h1 className="text-5xl font-black text-gray-900 leading-tight">Die Cut</h1>
                <div className="flex items-center mt-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-green-600" />)}
                    </div>
                    <a href="#reviews" className="ml-3 text-sm font-medium text-gray-700 hover:text-black">
                        <strong>4.7</strong> out of <strong>16,558</strong> reviews
                    </a>
                </div>
                <p className="mt-4 text-lg text-gray-600">
                    Precisely cut to your design’s shape and built to last. Our flagship product is durable, vibrant, and made to stand out. Stick it, send it, or slap it where it matters.
                </p>
            </div>
            
            <div className="space-y-6">
                <div>
                    <SectionHeader title="Shape" />
                     <RadioList<StickerShape> options={shapes} selected={selectedShape} setSelected={setSelectedShape} nameKey="name" valueKey="name" iconKey="icon" />
                </div>

                <div>
                    <SectionHeader title="Material" />
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        {materials.map(material => {
                            const isSelected = selectedMaterial.name === material.name;
                            return (
                                <button key={material.name} onClick={() => setSelectedMaterial(material)} className={`p-2 text-center rounded-lg transition-all duration-200 ${isSelected ? 'bg-gray-200 ring-2 ring-gray-800' : 'bg-white hover:bg-gray-100 border'}`}>
                                    <img src={material.image} alt={material.name} className="w-16 h-16 mx-auto" />
                                    <span className={`block text-xs font-bold mt-2 ${isSelected ? 'text-black' : 'text-gray-700'}`}>{material.name}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <SectionHeader title="Finish" />
                    <div className="relative">
                        <select
                          value={selectedFinish}
                          onChange={(e) => setSelectedFinish(e.target.value)}
                          className="w-full appearance-none bg-white border border-gray-300 rounded-lg p-3 pr-8 font-semibold text-gray-800 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                        >
                          {finishes.map(finish => <option key={finish} value={finish}>{finish}</option>)}
                        </select>
                        <ChevronDownIcon className="absolute top-1/2 right-3 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                    </div>
                </div>

                <div>
                    <SectionHeader title='Size, inch (WxH)' />
                    <RadioList<StickerSize> options={sizes} selected={selectedSize} setSelected={setSelectedSize} nameKey="name" valueKey="name" />
                </div>

                <div>
                    <SectionHeader title="Quantity" />
                    <ul className="bg-white rounded-lg">
                        {quantities.map((q, index) => {
                            const isSelected = selectedQuantity.amount === q.amount;
                            return (
                                <li key={q.amount}>
                                    <label className={`flex items-center justify-between p-3 cursor-pointer transition-colors duration-200 ${isSelected ? 'bg-gray-200' : 'hover:bg-gray-100'} ${index === 0 ? 'rounded-t-lg' : ''} ${index === quantities.length - 1 ? 'rounded-b-lg' : ''}`}>
                                        <input
                                            type="radio"
                                            name="quantity"
                                            value={q.amount}
                                            checked={isSelected}
                                            onChange={() => setSelectedQuantity(q)}
                                            className="absolute opacity-0 w-0 h-0"
                                        />
                                        <span className={`font-semibold ${isSelected ? 'text-black' : 'text-gray-700'}`}>{q.amount} pcs</span>
                                        <div className="flex items-center">
                                            {q.discount && <span className="text-sm font-bold text-green-600 mr-4">-{q.discount}%</span>}
                                            <span className={`font-bold ${isSelected ? 'text-black' : 'text-gray-800'}`}>${q.price}</span>
                                        </div>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg space-y-4 sticky bottom-4">
                 <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total Price</span>
                    <span className="text-3xl font-black text-gray-900">${selectedQuantity.price.toFixed(2)}</span>
                </div>
                {uploadState === 'error' && uploadError && (
                    <p className="text-red-600 text-sm font-semibold text-center">{uploadError}</p>
                )}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {!uploadedImage ? (
                        <button
                            onClick={() => document.getElementById('file-upload')?.click()}
                            disabled={uploadState === 'loading'}
                            className="w-full border-2 border-gray-800 text-black font-extrabold py-3 px-6 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-wait"
                        >
                            {uploadState === 'loading' ? 'Uploading...' : 'Upload file'}
                        </button>
                    ) : (
                        <div className="flex items-center space-x-3 p-2 border rounded-lg bg-white overflow-hidden">
                            <img src={uploadedImage} alt="Uploaded preview" className="w-12 h-12 rounded object-contain flex-shrink-0 bg-gray-200" />
                            <div className="flex-grow min-w-0">
                                <p className="text-sm font-bold text-gray-800 truncate" title={fileName || 'Your Design'}>
                                    {fileName || 'Your Design'}
                                </p>
                                <button onClick={handleRemoveImage} className="text-xs text-red-500 hover:underline font-semibold">
                                    Remove
                                </button>
                            </div>
                        </div>
                    )}
                    <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept={ALLOWED_FILE_TYPES_STRING} />
                    
                    <button
                        onClick={handleAddToCartClick}
                        className="w-full bg-yellow-400 text-black font-extrabold py-3 px-6 rounded-lg text-lg hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;