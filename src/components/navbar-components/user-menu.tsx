import React from 'react';
import { User, Settings, LogOut, Package, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const UserMenu: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="flex items-center space-x-2 p-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              john.doe@example.com
            </p>
          </div>
        </div>
        <Separator />
        <div className="p-1">
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <Package className="mr-2 h-4 w-4" />
            Orders
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <Heart className="mr-2 h-4 w-4" />
            Favorites
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
        <Separator />
        <div className="p-1">
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;