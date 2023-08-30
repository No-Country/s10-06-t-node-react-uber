import { type FC, useState } from 'react'
import { Home } from './Home'
import { SectionManager } from '@/components/Dashboard/SectionManager'
import { ActivityHistory } from './ActivityHistory'
import { Chat } from './Chat'
import { AccountManager } from './AccountManager'

export const Dashboard: FC = () => {
  const [currentSection, setCurrentSection] = useState<React.ReactNode>(
    <Home />,
  )

  const handleSection = (nameSection: string): void => {
    setCurrentSection(sectionComponents[nameSection] ?? <Home />)
  }

  return (
    <div className='h-screen w-screen'>
      {currentSection}
      <SectionManager handleSection={handleSection} />
    </div>
  )
}

const sectionComponents: Record<string, React.ReactNode> = {
  ActivityHistory: <ActivityHistory />,
  Chat: <Chat />,
  AccountManager: <AccountManager />,
}
