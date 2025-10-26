'use client'

import { useState } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchFiltersProps {
  searchQuery: string
  selectedCategory: string
  categories: string[]
  onSearch: (query: string, category: string) => void
}

const SearchFilters = ({ searchQuery, selectedCategory, categories, onSearch }: SearchFiltersProps) => {
  const [localQuery, setLocalQuery] = useState(searchQuery)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(localQuery, selectedCategory)
  }

  const handleCategorySelect = (category: string) => {
    onSearch(localQuery, category)
    setIsFilterOpen(false)
  }

  const clearFilters = () => {
    setLocalQuery('')
    onSearch('', '全て')
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* 検索バー */}
        <div className="flex-1">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="記事を検索（タイトル、内容、タグ）"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
            {localQuery && (
              <button
                type="button"
                onClick={() => {
                  setLocalQuery('')
                  onSearch('', selectedCategory)
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </form>
        </div>

        {/* フィルタボタン（モバイル） */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Filter className="w-5 h-5" />
            <span>フィルタ ({selectedCategory})</span>
          </button>
        </div>

        {/* カテゴリフィルタ（デスクトップ） */}
        <div className="hidden lg:flex items-center space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 検索ボタン */}
        <div className="flex space-x-2">
          <button
            type="submit"
            onClick={handleSearchSubmit}
            className="btn-primary px-6"
          >
            検索
          </button>
          {(localQuery || selectedCategory !== '全て') && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              クリア
            </button>
          )}
        </div>
      </div>

      {/* モバイル用カテゴリフィルタ */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 pt-4 border-t border-gray-200"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* アクティブフィルタ表示 */}
      {(localQuery || selectedCategory !== '全て') && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>アクティブフィルタ:</span>
            {localQuery && (
              <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full">
                検索: "{localQuery}"
                <button
                  onClick={() => {
                    setLocalQuery('')
                    onSearch('', selectedCategory)
                  }}
                  className="ml-2 hover:text-primary/70"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCategory !== '全て' && (
              <span className="inline-flex items-center bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                カテゴリ: {selectedCategory}
                <button
                  onClick={() => onSearch(localQuery, '全て')}
                  className="ml-2 hover:text-secondary/70"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchFilters
