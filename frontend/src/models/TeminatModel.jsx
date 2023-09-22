class TeminatModel {
    constructor(data) {
        
        this.teminatID = data.teminatID;
        this.uyeID = data.uyeID;
        this.kiymetNKID = data.kiymetNKID;
        this.adet = data.adet;
        this.onay = data.onay;
        this.islemler = data.islemler;
        this.degerlenmisTutar = data.degerlenmisTutar;
        this.acıklama = data.acıklama;


        this.uyehesapNo = null;
        this.uyeName = null;
        this.uyeunvan = null;
        this.uyemusteriPortfoy = null;

        this.kiymetNKtanim = null;
        this.kiymetNKparaBirimi = null;
        this.kiymetNKfiyat = null;
        this.teminatıGiren= data.teminatıGiren;
        this.teminatıOnaylayan= data.teminatıOnaylayan;
        this.girisTarihi = data.girisTarihi;
        this.onaylanmaTarihi=data.onaylanmaTarihi;
        this.islemTipi = data.islemTipi;

        this.cekilecekAdet = data.cekilecekAdet;
        this.idOfCekilecek = data.idOfCekilecek;


    }
}

export default TeminatModel;