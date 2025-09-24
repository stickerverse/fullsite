import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const NotificationMenu: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={16} />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs">
            3
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Notifications</h4>
          <div className="space-y-2">
            <div className="p-2 rounded-md bg-muted/50">
              <p className="text-sm">Your sticker order #1234 has shipped!</p>
              <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
            </div>
            <div className="p-2 rounded-md bg-muted/50">
              <p className="text-sm">New design templates available</p>
              <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
            </div>
            <div className="p-2 rounded-md bg-muted/50">
              <p className="text-sm">Welcome to StickerVerse!</p>
              <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationMenu;