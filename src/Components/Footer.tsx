import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='Footer'>
      <div className='footer-menu'>
        <div className='footer-menu-item'>ANA SAYFA</div>
        <div className='footer-menu-item'>KAMPANYALAR</div>
        <div className='footer-menu-item'>HAKKIMIZDA</div>
        <div className='footer-menu-item'>YARDIM</div>
        <div className='footer-menu-item'>İLETİŞİM</div>
        <div className='footer-menu-item-last'>KARİYER</div>
      </div>
      <div className='footer-base'></div>
      <div className='footer-menu2'>
        <div className='footer-menu-item2'>Kullanım Şartları</div>
        <div className='footer-menu-item2'>Gizlilik</div>
        <div className='footer-menu-item2'>Çerez Politikası</div>
        <div className='footer-menu-item2'>Kişisel Verileri Koruma</div>
        <div className='footer-menu-item2'>İşlem Rehberi</div>
        <div className='footer-menu-item2'>Bilgi Güvenliği Politikamız</div>
        <div className='footer-menu-item2'>Bilgi Topluluğu Hizmetleri</div>
        <div className='footer-menu-item2-last'>Sorumlu Oyun</div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>
          <span className='footer-bottom-left-span'>+18</span>
          Nesine.com'a 18 yaşından büyükler üye olabilir.
        </div>
        <div className='footer-bottom-right'>
          <div className='copy-rights'>
            <div>Copyright 2006 - 2023 NESİNE.COM</div>
            <div>SporToto ve Milli Piyango yasal bayisi. Bütün hakları saklıdır.</div>
          </div>
          <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/iddaa-yeni-logo.svg" alt="iddia" className='iddia'/>
          <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/spor-toto-logo.svg" alt="sportoto" />
        </div>
      </div>
    </div>
  )
}

export default Footer;