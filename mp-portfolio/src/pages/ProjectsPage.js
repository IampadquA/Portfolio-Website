import { DesktopProjectPage } from '@/components/DesktopProjectPage'
import { MobileProjectsPage } from '@/components/MobileProjectpage'
import React from 'react'

export default ProjectsPage = ({ isMobile , isDesktop }) => {
  return (
    <>
      { isMobile ? <MobileProjectsPage /> : <DesktopProjectPage isDesktop={isDesktop} />}
    </>
  )
}
