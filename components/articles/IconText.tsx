import { ReactNode } from 'react'

interface IconTextProps {
  icon: ReactNode
  text: string
}

export default function IconText({ icon, text }: IconTextProps) {
  return (
    <div className="flex items-center justify-start gap-2">
      <div className="flex-shrink-0 text-gray-600" style={{ width: '1.25em', height: '1.25em' }}>
        {icon}
      </div>
      <span className="text-gray-700 text-sm md:text-base">{text}</span>
    </div>
  )
}

