import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>

          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TCX44CK');
              window.dataLayer = window.dataLayer || [];
              dataLayer.push({ event: "virtualPageView" });
              dataLayer.push({ event: "optimize.activate" });
          `
            }}
          />
          <style>{`.async-hide { opacity: 0 !important}`}</style>
          <script
            dangerouslySetInnerHTML={{
              __html: `
<script>
(function(a,s,y,n,c,h,i,d,e){
  s.className+=' '+y;
  h.start=1*new Date;
  h.end=i=function(){
    s.className=s.className.replace(RegExp(' ?'+y),'')
  };
  (a[n]=a[n]||[]).hide=h;
  setTimeout(function(){
    i();
    h.end=null
  },c);
  h.timeout=c;
})
  (window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-TCX44CK':true});
</script>

`
            }}
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
