'use client'

import { useState } from 'react'
import { Search, Filter, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface InternFiltersProps {
  searchQuery: string
  selectedJobType: string
  selectedLocation: string
  selectedDuration: string
  selectedSalary: string
  selectedGrade: string
  selectedStatus: string
  jobTypes: string[]
  locations: string[]
  durations: string[]
  salaryRanges: string[]
  targetGrades: string[]
  statusOptions: string[]
  onFilter: (
    query: string,
    jobType: string,
    location: string,
    duration: string,
    salary: string,
    grade: string,
    status: string
  ) => void
}

const InternFilters = ({
  searchQuery,
  selectedJobType,
  selectedLocation,
  selectedDuration,
  selectedSalary,
  selectedGrade,
  selectedStatus,
  jobTypes,
  locations,
  durations,
  salaryRanges,
  targetGrades,
  statusOptions,
  onFilter
}: InternFiltersProps) => {
  const [localQuery, setLocalQuery] = useState(searchQuery)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilter(localQuery, selectedJobType, selectedLocation, selectedDuration, selectedSalary, selectedGrade, selectedStatus)
  }

  const handleFilterChange = (
    type: 'jobType' | 'location' | 'duration' | 'salary' | 'grade' | 'status',
    value: string
  ) => {
    const newJobType = type === 'jobType' ? value : selectedJobType
    const newLocation = type === 'location' ? value : selectedLocation
    const newDuration = type === 'duration' ? value : selectedDuration
    const newSalary = type === 'salary' ? value : selectedSalary
    const newGrade = type === 'grade' ? value : selectedGrade
    const newStatus = type === 'status' ? value : selectedStatus
    
    onFilter(localQuery, newJobType, newLocation, newDuration, newSalary, newGrade, newStatus)
  }

  const clearFilters = () => {
    setLocalQuery('')
    onFilter('', '全て', '全て', '全て', '全て', '全て', '全て')
  }

  const hasActiveFilters = localQuery || 
    selectedJobType !== '全て' || 
    selectedLocation !== '全て' || 
    selectedDuration !== '全て' || 
    selectedSalary !== '全て' || 
    selectedGrade !== '全て' || 
    selectedStatus !== '全て'

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
                placeholder="インターンシップを検索（職種、企業名、スキル）"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              {localQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setLocalQuery('')
                    onFilter('', selectedJobType, selectedLocation, selectedDuration, selectedSalary, selectedGrade, selectedStatus)
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
            {/* 職種フィルタ */}
            <select
              value={selectedJobType}
              onChange={(e) => handleFilterChange('jobType', e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            >
              {jobTypes.map((jobType) => (
                <option key={jobType} value={jobType}>
                  {jobType}
                </option>
              ))}
            </select>

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* モバイル用職種・ステータス */}
                <div className="lg:hidden space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      職種
                    </label>
                    <select
                      value={selectedJobType}
                      onChange={(e) => handleFilterChange('jobType', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      {jobTypes.map((jobType) => (
                        <option key={jobType} value={jobType}>
                          {jobType}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
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

                {/* 勤務地 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    勤務地
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 期間 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    期間
                  </label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => handleFilterChange('duration', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    {durations.map((duration) => (
                      <option key={duration} value={duration}>
                        {duration}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 給与 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    時給
                  </label>
                  <select
                    value={selectedSalary}
                    onChange={(e) => handleFilterChange('salary', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    {salaryRanges.map((salary) => (
                      <option key={salary} value={salary}>
                        {salary}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 対象学年 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    対象学年
                  </label>
                  <select
                    value={selectedGrade}
                    onChange={(e) => handleFilterChange('grade', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    {targetGrades.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
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
                      onFilter('', selectedJobType, selectedLocation, selectedDuration, selectedSalary, selectedGrade, selectedStatus)
                    }}
                    className="ml-2 hover:text-primary/70"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedJobType !== '全て' && (
                <span className="inline-flex items-center bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                  職種: {selectedJobType}
                  <button
                    onClick={() => handleFilterChange('jobType', '全て')}
                    className="ml-2 hover:text-secondary/70"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedLocation !== '全て' && (
                <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  勤務地: {selectedLocation}
                  <button
                    onClick={() => handleFilterChange('location', '全て')}
                    className="ml-2 hover:text-green-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedDuration !== '全て' && (
                <span className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  期間: {selectedDuration}
                  <button
                    onClick={() => handleFilterChange('duration', '全て')}
                    className="ml-2 hover:text-purple-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedSalary !== '全て' && (
                <span className="inline-flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  時給: {selectedSalary}
                  <button
                    onClick={() => handleFilterChange('salary', '全て')}
                    className="ml-2 hover:text-yellow-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedGrade !== '全て' && (
                <span className="inline-flex items-center bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                  学年: {selectedGrade}
                  <button
                    onClick={() => handleFilterChange('grade', '全て')}
                    className="ml-2 hover:text-indigo-600"
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

export default InternFilters
