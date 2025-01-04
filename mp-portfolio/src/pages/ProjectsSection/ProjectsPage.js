import { DesktopProjectPage } from './DesktopProjectPage'
import { MobileProjectsPage } from './MobileProjectpage'
import React from 'react'
import MobileProjectSection from './MobileProjectSection'

export const ProjectsPage = ({ isMobile , isDesktop }) => {
  return (
    <>
      { !isDesktop ? <MobileProjectSection/> : <DesktopProjectPage isDesktop={isDesktop} />}
    </>
  )
}

export default ProjectsPage;
