import React from 'react';
import { Photo } from '../types';
import { Image as ImageIcon } from 'lucide-react';

interface GalleryProps {
  photos: Photo[];
}

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <ImageIcon className="w-6 h-6" />
        ફોટો ગેલેરી (Gallery)
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
            <img 
              src={photo.url} 
              alt={photo.caption} 
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-medium text-sm">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};