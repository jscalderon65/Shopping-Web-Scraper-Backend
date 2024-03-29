module.exports = {
  sendGridTemplate: (
    brand,
    productName,
    actualPrice,
    oldPrice,
    productUrl,
  ) => `<!DOCTYPE html>

  <html
    lang="en"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml"
  >
    <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <!--[if mso
        ]><xml
          ><o:OfficeDocumentSettings
            ><o:PixelsPerInch>96</o:PixelsPerInch
            ><o:AllowPNG /></o:OfficeDocumentSettings></xml
      ><![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
  
        body {
          margin: 0;
          padding: 0;
        }
  
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
  
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
  
        p {
          line-height: inherit;
        }
  
        @media (max-width: 520px) {
          .icons-inner {
            text-align: center;
          }
  
          .icons-inner td {
            margin: 0 auto;
          }
  
          .row-content {
            width: 100% !important;
          }
  
          .column .border {
            display: none;
          }
  
          .stack .column {
            width: 100%;
            display: block;
          }
        }
      </style>
    </head>
    <body
      style="
        background-color: #1a1d24;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
      "
    >
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="nl-container"
        role="presentation"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          background-color: #1a1d24;
        "
        width="100%"
      >
        <tbody>
          <tr>
            <td>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-1"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 500px;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="heading_block"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    style="
                                      width: 100%;
                                      text-align: center;
                                      padding-bottom: 15px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        color: #555555;
                                        font-size: 24px;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        line-height: 120%;
                                        text-align: center;
                                        direction: ltr;
                                        font-weight: 700;
                                        letter-spacing: normal;
                                        margin-top: 30px;
                                        margin-bottom: 0;
                                      "
                                    >
                                      <span
                                        class="tinyMce-placeholder"
                                        style="color: #fefeff"
                                        >Revisa tu producto de ${brand} 📣</span
                                      >
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-2"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 500px;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td>
                                    <div
                                      style="
                                        color: #000000;
                                        font-size: 18px;
                                        font-family: Arial, Helvetica Neue,
                                          Helvetica, sans-serif;
                                        font-weight: 700;
                                        line-height: 150%;
                                        text-align: center;
                                        direction: ltr;
                                        letter-spacing: 0px;
                                      "
                                    >
                                      <p style="margin: 0; margin-bottom: 16px">
                                        <span style="color: #fefeff"
                                          >📌 Se registro nuevo precio para<strong>
                                            ${productName}:</strong
                                          ></span
                                        >
                                      </p>
                                      <p style="margin: 0; margin-bottom: 16px">
                                        <span style="color: #fefeff"
                                          ><strong
                                            >${actualPrice}</strong
                                          ></span
                                        >
                                      </p>
                                      <p style="margin: 0">
                                        <span
                                          style="text-decoration: line-through"
                                          ><span
                                            style="
                                              color: #f21f1f;
                                              text-decoration: line-through;
                                            "
                                            ><strong
                                              >${oldPrice}</strong
                                            ></span
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-3"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 500px;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="button_block"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td>
                                    <div align="center">
                                      <a
                                        href="${productUrl}"
                                        style="
                                          text-decoration: none;
                                          display: inline-block;
                                          color: #ffffff;
                                          background-color: #262A33;
                                          border-radius: 4px;
                                          width: auto;
                                          border-top: 1px solid #262A33;
                                          border-right: 1px solid #262A33;
                                          border-bottom: 1px solid #262A33;
                                          border-left: 1px solid #262A33;
                                          padding-top: 5px;
                                          padding-bottom: 5px;
                                          font-family: Arial, Helvetica Neue,
                                            Helvetica, sans-serif;
                                          text-align: center;
                                          mso-border-alt: none;
                                          word-break: keep-all;
                                        "
                                        ><span
                                          style="
                                            padding-left: 20px;
                                            padding-right: 20px;
                                            font-size: 16px;
                                            display: inline-block;
                                            letter-spacing: normal;
                                          "
                                          ><span
                                            style="
                                              font-size: 16px;
                                              line-height: 2;
                                              word-break: break-word;
                                              mso-line-height-alt: 32px;
                                            "
                                            ><b>${productUrl}</b></span
                                          ></span
                                        ></a
                                      >
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-4"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          color: #000000;
                          width: 500px;
                        "
                        width="500"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="column column-1"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                vertical-align: top;
                                padding-top: 5px;
                                padding-bottom: 5px;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                              "
                              width="100%"
                            >
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="icons_block"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                "
                                width="100%"
                              >
                                <tr>
                                  <td
                                    style="
                                      vertical-align: middle;
                                      color: #9d9d9d;
                                      font-family: inherit;
                                      font-size: 15px;
                                      padding-bottom: 5px;
                                      padding-top: 5px;
                                      text-align: center;
                                    "
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                      "
                                      width="100%"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            vertical-align: middle;
                                            text-align: center;
                                          "
                                        >
                                          <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                          <!--[if !vml]><!-->
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="icons-inner"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              display: inline-block;
                                              margin-right: -4px;
                                              padding-left: 0px;
                                              padding-right: 0px;
                                            "
                                          >
                                            <!--<![endif]-->
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End -->
    </body>
  </html>
  `,
}
