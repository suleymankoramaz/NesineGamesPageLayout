import React from 'react'

type Props = {}

const Base = (props: Props) => {
  return (
    <div className='Base'>
      <div className='header'>
        <div className='header-left'>
          <div className='header-box'>
            <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/header/h-iddaa-icon.svg" alt="bulten" className='header-box-img' />
            Bülten
          </div>
          <div className='header-box'>
            <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/header/h-kupondas-icon.svg" alt="kupondas" className='header-box-img' />
            Kupondaş
          </div>
          <div className='header-box'>
            <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/header/h-canli-sonuclar-icon.svg" alt="canli-sonuclar" className='header-box-img' />
            Canlı Sonuçlar
          </div>
          <div className='header-box'>
            <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/header/h-populer-bahisler-icon.svg" alt="populer-bahisler" className='header-box-img' />
            Popüler Bahisler
          </div>
          <div className='header-box'>
            <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/header/h-kazanan-on-icon.svg" alt="kazanan10" className='header-box-img' />
            Kazanan 10
          </div>
          <div className='header-box'>
            <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/header/h-editor-yorumlari-icon.svg" alt="editorler" className='header-box-img' />
            Editörler
          </div>
          <div className='header-box'>
            <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/header/h-nesinetv-icon.svg" alt="nesinetv" className='header-box-img' />
            Nesine TV
          </div>
        </div>
        <div className='header-right'>
          <div className='header-box'>
            <div className='header-box'>
              <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/header/h-sansoyunlari.svg" alt="sans-oyunlari" className='header-box-img' />
              Şans Oyunları
            </div>
          </div>
          <div className='header-box'>
            <div className='header-box'>
              <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/header/h-sportoto-icon.svg" alt="spor-toto" className='header-box-img' />
              Spor Toto
            </div>
          </div>
          <div className='header-box'>
            <div className='header-box'>
              <img src="https://cdnsc.nesine.com/10859828926/www/assets/images/header/tjk-icon.svg" alt="at-yarisi" className='header-box-img' />
              At Yarışı
            </div>
          </div>
        </div>
      </div>
      <div className='game-list-container'>
          <div className='game-list'>
            <div className='game'>Game 1</div>
            <div className='game'>Game 2</div>
            <div className='game'>Game 3</div>
            <div className='game'>Game 4</div>
            <div className='game'>Game 5</div>
            <div className='game'>Game 6</div>
            <div className='game'>Game 7</div>
            <div className='game'>Game 8</div>
          </div>
        </div>
        <div className='coupons'>
          <div>Satın almış olduğunuz Zeplin kuponlarına buradan ulaşabilirsiniz.</div>
          <div className='go-my-coupons'> Kuponlarıma Git</div>
        </div>
        <div className='cekilemez-bakiye-container'>
          <div className='cekilemez-bakiye'>
            Zeplin oyunundan kazanılan ikramiye tutarları hesabınıza Çekilemez Bakiye olarak yatırılmaktadır. Çekilemez bakiyelerinizi İddaa, Spor Toto ve Şans Oyunlarında kullanabilirsiniz. İddaa ve Spor Toto kazancınızı anında çekebilirsiniz. Zeplin oyunu ve çekilemez bakiye hakkında detaylı bilgi için tıklayınız.
          </div>
        </div>
      <div className='iFrame-container'>
        <iframe
          title='ertgaming tas kagıt makas'  
          src='http://ertgaming.com/game-play'
          width='100%'
          height='100%'
        />
      </div>
      <div className='game-info-container'>
        <div className='game-info-header'>Zeplin Oyunu Nedir ?</div>
        <div className='game-info'>Zeplin Oyunu, Nesine.com'da Milli Piyango İdaresi güvencesi ve Devlet Garantisi ile eğlence amaçlı oynanabilen dijital bir şans oyunudur.</div>
        <div className='game-info-header'>Zeplin Oyunu Nasıl Oynanır ?</div>
        <div className='game-info'>Dijital çerçeveli alan içinde, elektronik olarak yönetilen kurallarla belirlenmiş rastgele bir noktaya kadar çıkabilen Zeplin'in, yukarı çıktıkça artan katsayıya göre kazanç getiren bir şans oyunudur. Zeplin patlamadan önce "NAKİT ÇIKIŞI" butonuna tıklayarak kazançlı şekilde oyunu tamamlamak amaçlanır. Zeplin'e giren bir oyuncu, zeplin patlamadan önce ekranda görünen katsayı ile çekildiğinde, yatırdığı paranın o katsayı ile çarpılmasıyla ortaya çıkan tutarı da kazanç olarak elde etmiş olur.</div>
      </div>
    </div>
  )
}

export default Base;
