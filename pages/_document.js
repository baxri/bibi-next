import Document, { Head, Main, NextScript } from "next/document";
import { withRouter } from 'next/router'

class MyDocument extends Document {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="shortcut icon" href="img/fav.png" />
                    <meta name="author" content="colorlib" />
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <meta charSet="UTF-8" />
                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900" rel="stylesheet" />
                    <link rel="stylesheet" href="/static/css/linearicons.css" />
                    <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/static/css/bootstrap.css" />
                    <link rel="stylesheet" href="/static/css/magnific-popup.css" />
                    <link rel="stylesheet" href="/static/css/nice-select.css" />
                    <link rel="stylesheet" href="/static/css/animate.min.css" />
                    <link rel="stylesheet" href="/static/css/owl.carousel.css" />
                    <link rel="stylesheet" href="/static/css/carousel.min.css" />
                    <link rel="stylesheet" href="/static/css/main.css" />
                    <link rel="stylesheet" href="/static/css/nprogress.css" />
                </Head>
                <body>
                    <Main />

                    <script src="/static/js/vendor/jquery-2.2.4.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                        crossOrigin="anonymous"></script>
                    <script src="/static/js/vendor/bootstrap.min.js"></script>
                    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
                    <script src="/static/js/easing.min.js"></script>
                    <script src="/static/js/hoverIntent.js"></script>
                    <script src="/static/js/superfish.min.js"></script>
                    <script src="/static/js/mn-accordion.js"></script>
                    <script src="/static/js/jquery.ajaxchimp.min.js"></script>
                    <script src="/static/js/jquery.magnific-popup.min.js"></script>
                    <script src="/static/js/owl.carousel.min.js"></script>
                    <script src="/static/js/jquery.nice-select.min.js"></script>
                    <script src="/static/js/isotope.pkgd.min.js"></script>
                    <script src="/static/js/jquery.circlechart.js"></script>
                    <script src="/static/js/mail-script.js"></script>
                    <script src="/static/js/wow.min.js"></script>
                    <script src="/static/js/main.js"></script>
                    <NextScript />
                </body>
            </html>
        )
    }
}


export default withRouter(MyDocument);
