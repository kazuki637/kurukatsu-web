'use client'

import { useState } from 'react'
import { Search, Filter, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SponsorFiltersProps {
  searchQuery: string
  selectedTargetType: string
  selectedGenre: string
  selectedStatus: string
  targetTypes: string[]
  genres: string[]
  statusOptions: string[]
  onFilter: (query: string, targetType: string, genre: string, status: string) => void
}

const SponsorFilters = ({
  searchQuery,
  selectedTargetType,
  selectedGenre,
  selectedStatus,
  targetTypes,
  genres,
  statusOptions,
  onFilter
}: SponsorFiltersProps) => {
  const [localQuery, setLocalQuery] = useState(searchQuery)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilter(localQuery, selectedTargetType, selectedGenre, selectedStatus)
  }

  const handleFilterChange = (type: 'targetType' | 'genre' | 'status', value: string) => {
    const newTargetType = type === 'targetType' ? value : selectedTargetType
    const newGenre = type === 'genre' ? value : selectedGenre
    const newStatus = type === 'status' ? value : selectedStatus
    
    onFilter(localQuery, newTargetType, newGenre, newStatus)
  }

  const clearFilters = () => {
    setLocalQuery('')
    onFilter('', '全て', '全て', '全て')
  }

  const hasActiveFilters = localQuery || selectedTargetType !== '全て' || selectedGenre !== '全て' || selectedStatus !== '全て'

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="space-y-4">
        {/* 検索バーと基本フィルタ */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* 検索バー */}
          <div className="flex-1">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="協賛案件を検索（タイトル、企業名、ジャンル）"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              {localQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setLocalQuery('')
                    onFilter('', selectedTargetType, selectedGenre, selectedStatus)
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </form>
          </div>

          {/* クイックフィルタ（デスクトップ） */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* ステータスフィルタ */}
            <select
              value={selectedStatus}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            {/* 詳細フィルタボタン */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Filter className="w-5 h-5" />
              <span>詳細フィルタ</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* モバイル用フィルタボタン */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Filter className="w-5 h-5" />
              <span>フィルタ設定</span>
            </button>
          </div>

          {/* 検索・クリアボタン */}
          <div className="flex space-x-2">
            <button
              type="submit"
              onClick={handleSearchSubmit}
              className="btn-primary px-6"
            >
              検索
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                クリア
              </button>
            )}
          </div>
        </div>

        {/* 詳細フィルタエリア */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-200 pt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 対象サークル種別 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    対象サークル
                  </label>
                  <select
                    value={selectedTargetType}
                    onChange={(e) => handleFilterChange('targetType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    {targetTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ジャンル */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ジャンル
                  </label>
                  <select
                    value={selectedGenre}
                    onChange={(e) => handleFilterChange('genre', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    {genres.map((genre) => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ステータス（モバイル用） */}
                <div className="lg:hidden">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    募集状況
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* アクティブフィルタ表示 */}
        {hasActiveFilters && (
          <div className="border-t border-gray-200 pt-4">
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span>アクティブフィルタ:</span>
              {localQuery && (
                <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full">
                  検索: "{localQuery}"
                  <button
                    onClick={() => {
                      setLocalQuery('')
                      onFilter('', selectedTargetType, selectedGenre, selectedStatus)
                    }}
                    className="ml-2 hover:text-primary/70"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedTargetType !== '全て' && (
                <span className="inline-flex items-center bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                  対象: {selectedTargetType}
                  <button
                    onClick={() => handleFilterChange('targetType', '全て')}
                    className="ml-2 hover:text-secondary/70"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedGenre !== '全て' && (
                <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  ジャンル: {selectedGenre}
                  <button
                    onClick={() => handleFilterChange('genre', '全て')}
                    className="ml-2 hover:text-green-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedStatus !== '全て' && (
                <span className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  状況: {selectedStatus}
                  <button
                    onClick={() => handleFilterChange('status', '全て')}
                    className="ml-2 hover:text-blue-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SponsorFilters
