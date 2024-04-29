import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import BreakingNew from '../../components/BreakingNew'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next';

const Layout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);
  return (
    <>
      <BreakingNew />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
