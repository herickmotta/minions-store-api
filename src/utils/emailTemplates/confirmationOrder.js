function itemTemplate(item) {
  const { product, quantity } = item;
  return (
    `
    <tr>
                    <td class="es-p20t es-p20b es-p20r es-p20l" align="left">
                      <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
                      <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                        <tr>
                          <td width="270" class="es-m-p20b" align="left">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                              <tr>
                                <td align="center" style="font-size:0"><a href="https://viewstripo.email/"
                                    target="_blank">
                                    <img
                                      src=${product.photo}
                                      class="adapt-img" style="display: block"
                                      width="270" height="320" layout="responsive"/>
                                  </a></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td><td width="20"></td>
<td width="270" valign="top"><![endif]-->
                      <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                        <tr>
                          <td width="270" align="left">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                              <tr>
                                <td align="left">
                                  <p><strong>${product.name}</strong></p>
                                </td>
                              </tr>
                              <tr>
                                <td align="center" height="40"></td>
                              </tr>
                              <tr>
                                <td align="left">
                                  <p><b>Quantidade: ${quantity}</b></p>
                                </td>
                              </tr>
                              <tr>
                                <td align="left">
                                  <p><b>Preço: ${(product.price / 100).toFixed(2)}</b></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                  </tr>
    `
  );
}

function htmlTemplate(cart) {
  return `
  <!doctype html>
<html ⚡4email data-css-strict>

<head>
  <meta charset="utf-8">
  <style amp4email-boilerplate>
    body {
      visibility: hidden
    }
  </style>
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <style amp-custom>
    .es-desk-hidden {
      display: none;
      float: left;
      overflow: hidden;
      width: 0;
      max-height: 0;
      line-height: 0;
    }

    .es-button-border:hover {
      border-color: #C7997F #C7997F #C7997F #C7997F;
      background: #FCE5CD;
    }

    .es-button-border:hover a.es-button,
    .es-button-border:hover button.es-button {
      background: #FCE5CD;
      border-color: #FCE5CD;
      color: #28495C;
    }

    td .es-button-border:hover a.es-button-1 {
      background: #FCE5CD;
      border-color: #FCE5CD;
    }

    td .es-button-border-3:hover {
      background: #FCE5CD;
    }

    s {
      text-decoration: line-through;
    }

    body {
      width: 100%;
      font-family: "courier new", courier, "lucida sans typewriter", "lucida typewriter", monospace;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0px;
    }

    table td,
    html,
    body,
    .es-wrapper {
      padding: 0;
      Margin: 0;
    }

    .es-content,
    .es-header,
    .es-footer {
      table-layout: fixed;
      width: 100%;
    }

    p,
    hr {
      Margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      Margin: 0;
      line-height: 120%;
      font-family: "lucida sans unicode", "lucida grande", sans-serif;
    }

    .es-left {
      float: left;
    }

    .es-right {
      float: right;
    }

    .es-p5 {
      padding: 5px;
    }

    .es-p5t {
      padding-top: 5px;
    }

    .es-p5b {
      padding-bottom: 5px;
    }

    .es-p5l {
      padding-left: 5px;
    }

    .es-p5r {
      padding-right: 5px;
    }

    .es-p10 {
      padding: 10px;
    }

    .es-p10t {
      padding-top: 10px;
    }

    .es-p10b {
      padding-bottom: 10px;
    }

    .es-p10l {
      padding-left: 10px;
    }

    .es-p10r {
      padding-right: 10px;
    }

    .es-p15 {
      padding: 15px;
    }

    .es-p15t {
      padding-top: 15px;
    }

    .es-p15b {
      padding-bottom: 15px;
    }

    .es-p15l {
      padding-left: 15px;
    }

    .es-p15r {
      padding-right: 15px;
    }

    .es-p20 {
      padding: 20px;
    }

    .es-p20t {
      padding-top: 20px;
    }

    .es-p20b {
      padding-bottom: 20px;
    }

    .es-p20l {
      padding-left: 20px;
    }

    .es-p20r {
      padding-right: 20px;
    }

    .es-p25 {
      padding: 25px;
    }

    .es-p25t {
      padding-top: 25px;
    }

    .es-p25b {
      padding-bottom: 25px;
    }

    .es-p25l {
      padding-left: 25px;
    }

    .es-p25r {
      padding-right: 25px;
    }

    .es-p30 {
      padding: 30px;
    }

    .es-p30t {
      padding-top: 30px;
    }

    .es-p30b {
      padding-bottom: 30px;
    }

    .es-p30l {
      padding-left: 30px;
    }

    .es-p30r {
      padding-right: 30px;
    }

    .es-p35 {
      padding: 35px;
    }

    .es-p35t {
      padding-top: 35px;
    }

    .es-p35b {
      padding-bottom: 35px;
    }

    .es-p35l {
      padding-left: 35px;
    }

    .es-p35r {
      padding-right: 35px;
    }

    .es-p40 {
      padding: 40px;
    }

    .es-p40t {
      padding-top: 40px;
    }

    .es-p40b {
      padding-bottom: 40px;
    }

    .es-p40l {
      padding-left: 40px;
    }

    .es-p40r {
      padding-right: 40px;
    }

    .es-menu td {
      border: 0;
    }

    a {
      text-decoration: none;
    }

    p,
    ul li,
    ol li {
      font-family: "courier new", courier, "lucida sans typewriter", "lucida typewriter", monospace;
      line-height: 150%;
    }

    ul li,
    ol li {
      Margin-bottom: 15px;
    }

    .es-menu td a {
      text-decoration: none;
      display: block;
    }

    .es-menu amp-img,
    .es-button amp-img {
      vertical-align: middle;
    }

    .es-wrapper {
      width: 100%;
      height: 100%;
    }

    .es-wrapper-color {
      background-color: transparent;
    }

    .es-header {
      background-color: transparent;
    }

    .es-header-body {
      background-color: #FFFFFF;
    }

    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li {
      color: #333333;
      font-size: 18px;
    }

    .es-header-body a {
      color: #38761D;
      font-size: 18px;
    }

    .es-content-body {
      background-color: #FFFFFF;
    }

    .es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li {
      color: #333333;
      font-size: 18px;
    }

    .es-content-body a {
      color: #38761D;
      font-size: 18px;
    }

    .es-footer {
      background-color: transparent;
    }

    .es-footer-body {
      background-color: #FFFFFF;
    }

    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li {
      color: #333333;
      font-size: 14px;
    }

    .es-footer-body a {
      color: #FFFFFF;
      font-size: 14px;
    }

    .es-infoblock,
    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li {
      line-height: 120%;
      font-size: 12px;
      color: #CCCCCC;
    }

    .es-infoblock a {
      font-size: 12px;
      color: #CCCCCC;
    }

    h1 {
      font-size: 30px;
      font-style: normal;
      font-weight: bold;
      color: #333333;
    }

    h2 {
      font-size: 24px;
      font-style: normal;
      font-weight: normal;
      color: #333333;
    }

    h3 {
      font-size: 18px;
      font-style: normal;
      font-weight: bold;
      color: #333333;
    }

    .es-header-body h1 a,
    .es-content-body h1 a,
    .es-footer-body h1 a {
      font-size: 30px;
    }

    .es-header-body h2 a,
    .es-content-body h2 a,
    .es-footer-body h2 a {
      font-size: 24px;
    }

    .es-header-body h3 a,
    .es-content-body h3 a,
    .es-footer-body h3 a {
      font-size: 18px;
    }

    a.es-button,
    button.es-button {
      border-style: solid;
      border-color: #FFFFFF;
      border-width: 10px 20px 10px 20px;
      display: inline-block;
      background: #FFFFFF;
      border-radius: 0px;
      font-size: 14px;
      font-family: "lucida sans unicode", "lucida grande", sans-serif;
      font-weight: normal;
      font-style: normal;
      line-height: 120%;
      color: #D7B6A3;
      text-decoration: none;
      width: auto;
      text-align: center;
    }

    .es-button-border {
      border-style: solid solid solid solid;
      border-color: #D7B6A3 #D7B6A3 #D7B6A3 #D7B6A3;
      background: #FFFFFF;
      border-width: 1px 1px 1px 1px;
      display: inline-block;
      border-radius: 0px;
      width: auto;
    }

    input {
      display: none;
    }

    @media only screen and (max-width:600px) {

      p,
      ul li,
      ol li,
      a {
        line-height: 150%
      }

      h1 {
        font-size: 30px;
        text-align: center;
        line-height: 120%
      }

      h2 {
        font-size: 26px;
        text-align: center;
        line-height: 120%
      }

      h3 {
        font-size: 20px;
        text-align: center;
        line-height: 120%
      }

      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 30px
      }

      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 26px
      }

      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 20px
      }

      .es-menu td a {
        font-size: 16px
      }

      .es-header-body p,
      .es-header-body ul li,
      .es-header-body ol li,
      .es-header-body a {
        font-size: 16px
      }

      .es-content-body p,
      .es-content-body ul li,
      .es-content-body ol li,
      .es-content-body a {
        font-size: 16px
      }

      .es-footer-body p,
      .es-footer-body ul li,
      .es-footer-body ol li,
      .es-footer-body a {
        font-size: 16px
      }

      .es-infoblock p,
      .es-infoblock ul li,
      .es-infoblock ol li,
      .es-infoblock a {
        font-size: 12px
      }

      *[class="gmail-fix"] {
        display: none
      }

      .es-m-txt-c,
      .es-m-txt-c h1,
      .es-m-txt-c h2,
      .es-m-txt-c h3 {
        text-align: center
      }

      .es-m-txt-r,
      .es-m-txt-r h1,
      .es-m-txt-r h2,
      .es-m-txt-r h3 {
        text-align: right
      }

      .es-m-txt-l,
      .es-m-txt-l h1,
      .es-m-txt-l h2,
      .es-m-txt-l h3 {
        text-align: left
      }

      .es-m-txt-r amp-img {
        float: right
      }

      .es-m-txt-c amp-img {
        margin: 0 auto
      }

      .es-m-txt-l amp-img {
        float: left
      }

      .es-button-border {
        display: block
      }

      a.es-button,
      button.es-button {
        font-size: 14px;
        display: block;
        border-left-width: 0px;
        border-right-width: 0px
      }

      .es-btn-fw {
        border-width: 10px 0px;
        text-align: center
      }

      .es-adaptive table,
      .es-btn-fw,
      .es-btn-fw-brdr,
      .es-left,
      .es-right {
        width: 100%
      }

      .es-content table,
      .es-header table,
      .es-footer table,
      .es-content,
      .es-footer,
      .es-header {
        width: 100%;
        max-width: 600px
      }

      .es-adapt-td {
        display: block;
        width: 100%
      }

      .adapt-img {
        width: 100%;
        height: auto
      }

      td.es-m-p0 {
        padding: 0px
      }

      td.es-m-p0r {
        padding-right: 0px
      }

      td.es-m-p0l {
        padding-left: 0px
      }

      td.es-m-p0t {
        padding-top: 0px
      }

      td.es-m-p0b {
        padding-bottom: 0
      }

      td.es-m-p20b {
        padding-bottom: 20px
      }

      .es-mobile-hidden,
      .es-hidden {
        display: none
      }

      tr.es-desk-hidden,
      td.es-desk-hidden,
      table.es-desk-hidden {
        width: auto;
        overflow: visible;
        float: none;
        max-height: inherit;
        line-height: inherit
      }

      tr.es-desk-hidden {
        display: table-row
      }

      table.es-desk-hidden {
        display: table
      }

      td.es-desk-menu-hidden {
        display: table-cell
      }

      .es-menu td {
        width: 1%
      }

      table.es-table-not-adapt,
      .esd-block-html table {
        width: auto
      }

      table.es-social {
        display: inline-block
      }

      table.es-social td {
        display: inline-block
      }
    }

    @media screen and (max-width:9999px) {
      .cboxcheck:checked+input+* .thumb-carousel {
        height: auto;
        max-height: none;
        max-width: none;
        line-height: 0
      }

      .thumb-carousel span {
        font-size: 0;
        line-height: 0
      }

      .cboxcheck:checked+input+* .thumb-carousel .car-content {
        display: none;
        max-height: 0px;
        overflow: hidden
      }

      .cbox0:checked+* .content-1,
      .thumb-carousel .cbox1:checked+span .content-1,
      .thumb-carousel .cbox2:checked+span .content-2,
      .thumb-carousel .cbox3:checked+span .content-3,
      .thumb-carousel .cbox4:checked+span .content-4,
      .thumb-carousel .cbox5:checked+span .content-5,
      .thumb-carousel .cbox6:checked+span .content-6 {
        display: block;
        max-height: none;
        overflow: visible
      }

      .thumb-carousel .thumb {
        cursor: pointer;
        display: inline-block;
        width: 14.6%;
        margin: 2% 0.61%;
        border: 1px solid #D7B6A3
      }

      .moz-text-html .thumb {
        display: none
      }

      .thumb-carousel .thumb:hover {
        border: 1px solid #444444
      }

      .cbox0:checked+* .thumb-1,
      .thumb-carousel .cbox1:checked+span .thumb-1,
      .thumb-carousel .cbox2:checked+span .thumb-2,
      .thumb-carousel .cbox3:checked+span .thumb-3,
      .thumb-carousel .cbox4:checked+span .thumb-4,
      .thumb-carousel .cbox5:checked+span .thumb-5,
      .thumb-carousel .cbox6:checked+span .content-6 {
        border-color: #A28878
      }

      .thumb-carousel .thumb img {
        width: 100%;
        height: auto
      }

      .thumb-carousel img {
        max-height: none
      }

      .cboxcheck:checked+input+* .fallback {
        display: none;
        max-height: 0px;
        height: 0px;
        overflow: hidden
      }
    }

    @media screen and (max-width:600px) {

      .car-table.responsive,
      .car-table.responsive .thumb-carousel,
      .car-table.responsive .thumb-carousel .car-content img,
      .car-table.responsive .fallback .car-content img {
        width: 100%;
        height: auto
      }
    }

    @media screen {}
  </style>
</head>

<body>
  <div class="es-wrapper-color">
    <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="transparent"></v:fill> </v:background><![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="background-position: right top">
      <tr>
        <td valign="top">
          <table cellpadding="0" cellspacing="0" class="es-header" align="center">
            <tr>
              <td align="center">
                <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0"
                  width="600">
                  <tr>
                    <td class="es-p20t es-p20r es-p20l" align="left" style="background-position: left top">
                      <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td width="560" align="center" valign="top">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                              <tr>
                                <td align="center" class="es-p20t">
                                  <h1><a target="_blank" style="font-size: 30px;color: #333333"
                                      href="https://viewstripo.email/">M</a>INIONS MANIA</h1>
                                </td>
                              </tr>
                              <tr>
                                <td align="center" class="es-p5t es-p10b es-p20r es-p20l" style="font-size:0">
                                  <table border="0" width="35%" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                      <td
                                        style="border-bottom: 3px solid #d7b6a3;background: none;height: 1px;width: 100%;margin: 0px">
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" class="es-content" align="center">
            <tr>
              <td align="center" bgcolor="#ffffff" style="background-color: #ffffff">
                <table bgcolor="#fbf5ed" class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                  width="600" style="background-color: #fbf5ed">
                  <tr>
                    <td class="es-p20t es-p20r es-p20l" align="left"
                      style="background-position: center center;background-color: transparent" bgcolor="transparent">
                      <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td width="560" align="center" valign="top">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                              <tr>
                                <td align="center" class="es-p10t es-p10r es-p10l">
                                  <h1>Confirmação de Reserva</h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="es-p10t es-p10b es-p20r es-p20l" align="left">
                      <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td width="560" align="center" valign="top">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                              <tr>
                                <td align="center">
                                  <p>Seus itens foram reservados com sucesso! :)</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" class="es-content" align="center">
            <tr>
              <td align="center" bgcolor="#ffffff" style="background-color: #ffffff">
                <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#fbf5ed"
                  align="center" style="background-color: #fbf5ed">
                  <tr>
                    <td class="es-p20r es-p20l" align="left">
                      <table width="100%" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="560" valign="top" align="center">
                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                              <tr>
                                <td class="es-p10b" align="center" style="font-size:0">
                                  <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                    <tr>
                                      <td
                                        style="border-bottom: 1px solid #efefef;background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height: 1px;width: 100%;margin: 0px">
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="es-p20r es-p20l" align="left" style="background-color: #d7b6a3" bgcolor="#d7b6a3">
                      <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td width="560" align="center" valign="top">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                              <tr>
                                <td align="left">
                                  <p><strong>Itens reservados</strong></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  ${cart.products.map((item) => itemTemplate(item))}

                  <tr>
                    <td class="es-p20r es-p20l" align="left">
                      <table width="100%" cellspacing="0" cellpadding="0">
                        <tr>
                          <td width="560" valign="top" align="center">
                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                              <tr>
                                <td class="es-p10b" align="center" style="font-size:0">
                                  <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                    <tr>
                                      <td
                                        style="border-bottom: 1px solid #efefef;background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height: 1px;width: 100%;margin: 0px">
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="es-p10t es-p10b es-p20r es-p20l" align="left">
                      <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="470" valign="top"><![endif]-->
                      <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                        <tr>
                          <td width="470" class="es-m-p20b" align="left">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                              <tr>
                                <td align="right">
                                  <p>Sub Total(2 itens):</p>
                                </td>
                              </tr>
                              <tr>
                                <td align="right">
                                  <p>Frete</p>
                                </td>
                              </tr>
                              <tr>
                                <td align="right">
                                  <p>Discount:</p>
                                </td>
                              </tr>
                              <tr>
                                <td align="right">
                                  <p><strong>Total:</strong></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td><td width="20"></td><td width="70" valign="top"><![endif]-->
                      <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                        <tr>
                          <td width="70" align="left">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                              <tr>
                                <td align="right">
                                  <p>R$${(cart.subTotal / 100).toFixed(2)}</p>
                                </td>
                              </tr>
                              <tr>
                                <td align="right">
                                  <p style="color: #38761d"><strong>R$${(cart.shipping / 100).toFixed(2)}</strong></p>
                                </td>
                              </tr>
                              <tr>
                                <td align="right">
                                  <p style="color: #38761d"><strong>R$${(cart.discount / 100).toFixed(2)}</strong></p>
                                </td>
                              </tr>
                              <tr>
                                <td align="right">
                                  <p style="color: #b45f06"><strong>R$${(cart.total / 100).toFixed(2)}</strong></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" class="es-content" align="center">
            <tr>
              <td align="center">
                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                  width="600">
                  <tr>
                    <td class="es-p20t es-p20b es-p20r es-p20l" align="left"
                      style="background-position: left top;background-color: #d7b6a3" bgcolor="#d7b6a3">
                      <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
                      <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                        <tr>
                          <td width="270" class="es-m-p20b" align="left">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                              <tr>
                                <td align="left" class="es-p10t es-p10b es-p5r es-p5l">
                                  <p style="font-size: 16px"><strong>Сontact</strong></p>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" class="es-p5t es-p5r es-p5l">
                                  <p style="font-size: 15px">Herick Motta,</p>
                                  <p style="font-size: 15px">herickrossato@gmail.com</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
                      <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                        <tr>
                          <td width="270" align="left">
                            <table cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td align="center" style="display: none"></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" class="es-content" align="center">
            <tr>
              <td align="center">
                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                  width="600" style="background-color: #ffffff">
                  <tr>
                    <td class="es-p40t es-p40b es-p20r es-p20l" align="left" style="background-position: center top">
                      <table cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td width="560" align="center" valign="top">
                            <table cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td align="center" style="display: none"></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>

</html>

  `;
}

export default function confirmationOrder(cart) {
  return htmlTemplate(cart);
}
