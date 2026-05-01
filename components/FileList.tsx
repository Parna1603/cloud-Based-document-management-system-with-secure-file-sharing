'use client'

import { useEffect, useState } from 'react'

export default function FileList() {
  const [files, setFiles] = useState<string[]>([])

  useEffect(() => {
    fetch('/api/files')
      .then(res => res.json())
      .then(data => setFiles(data.files))
  }, [])

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">Uploaded Files</h2>
      <ul className="list-disc pl-5">
        {files.map(file => (
          <li key={file}>
            <a href={`/uploads/${file}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {file}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}