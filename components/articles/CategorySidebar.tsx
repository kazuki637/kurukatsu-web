'use client'

import Link from 'next/link'

interface CategorySidebarProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategorySidebar({ categories, selectedCategory, onCategoryChange }: CategorySidebarProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">カテゴリ</h2>
      <ul className="list-none p-0 flex flex-col gap-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left text-sm md:text-base py-4 px-4 rounded border transition-all duration-300 ${
                selectedCategory === category
                  ? 'text-white font-bold bg-primary border-primary'
                  : 'text-gray-900 bg-transparent border-black hover:text-white hover:font-bold hover:bg-black'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

