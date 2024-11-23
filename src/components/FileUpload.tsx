import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

export const FileUpload = () => {
  const { t } = useTranslation();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/x-chess-pgn': ['.pgn'],
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full max-w-xl p-8 border-2 border-dashed rounded-xl cursor-pointer transition-colors
        ${
          isDragActive
            ? 'border-indigo-600 bg-indigo-50'
            : 'border-gray-300 hover:border-indigo-400'
        }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center text-center">
        <Upload className="w-12 h-12 text-indigo-600 mb-4" />
        <p className="text-xl font-medium mb-2">{t('upload.dragDrop')}</p>
        <p className="text-gray-500">
          {t('upload.or')} <span className="text-indigo-600">{t('upload.browse')}</span>
        </p>
      </div>
    </div>
  );
};