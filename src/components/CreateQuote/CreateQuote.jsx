import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  View,
  Text,
} from "@react-pdf/renderer";
import EmpresaLogo from "../../images/Quote/WithoutBackground/EmpresaLogo.png";

// Registrar el font Arial
Font.register({
  family: "Arial",
  src: "https://fonts.gstatic.com/s/arimo/v14/P5sMz3DQpbjR0rJtF_8uMA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  section: {
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#FFD700",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
  },
  dateContainer: {
    marginLeft: 10,
  },
  logo: {
    width: 80,
    height: "auto",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: "#FFD700",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: "#FFD700",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    borderStyle: "solid",
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: "#FFD700",
  },
  tableHeader: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
  },
  tableFooter: {
    borderTopWidth: 0,
  },
  text: {
    fontSize: 10,
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    backgroundColor: "#FFD700",
    alignSelf: "flex-start",
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    marginLeft: 35,
    marginRight: 35,
  },
  footerText: {
    marginBottom: 5,
  },
  date: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 10,
  },
  pageNumber: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontSize: 10,
  },
});

function CreateQuote({
  folio,
  cartItems,
  subtotal,
  currentDateTime,
  totalQuantitySum,
}) {
  const convertToNumber = (stringValue) => {
    const stringWithoutCommas = stringValue.replace(/,/g, "");
    const numberValue = parseFloat(stringWithoutCommas);
    const formattedNumber = numberValue.toFixed(2);
    return formattedNumber;
  };

  const formatNumber = (number) =>
    parseFloat(parseFloat(number).toFixed(2)).toLocaleString("es-MX", {
      minimumFractionDigits: 2,
    });

  const iva = formatNumber(convertToNumber(subtotal) * 0.085);

  const total = formatNumber(convertToNumber(subtotal) * (1 + 0.085));
  console.log("CreateQuote - folio: ", folio);

  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Cotización {folio}</Text>
            <Image src={EmpresaLogo} style={styles.logo} />
          </View>
          <View>
            <Text>{folio}</Text>
          </View>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <Text>Concepto</Text>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <Text>Cantidad</Text>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <Text>Precio</Text>
            </View>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <Text>Subtotal</Text>
            </View>
          </View>
          {cartItems.map((item) => (
            <View key={item.product.url} style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.text}>{item.product.name}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.text}>{item.product.quantity}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={[styles.text, styles.textRight]}>
                  ${item.product.price}
                </Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={[styles.text, styles.textRight]}>
                  ${formatNumber(item.product.price * item.product.quantity)}
                </Text>
              </View>
            </View>
          ))}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { border: 0 }]}></View>
            <View style={styles.tableCell}></View>
            <View style={styles.tableCell}>
              <Text style={[styles.text, styles.textRight]}>Subtotal:</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[styles.text, styles.textRight]}>
                ${subtotal} MXN
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { border: 0 }]}></View>
            <View style={styles.tableCell}></View>
            <View style={styles.tableCell}>
              <Text style={[styles.text, styles.textRight]}>IVA (8.5%):</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[styles.text, styles.textRight]}>${iva} MXN</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, { border: 0 }]}></View>
            <View style={styles.tableCell}></View>
            <View style={styles.tableCell}>
              <Text style={[styles.text, styles.textRight]}>Total:</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={[styles.text, styles.textRight]}>${total} MXN</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View
              style={[styles.tableCell, { border: 0, flex: 3, fontSize: 10 }]}
            >
              <Text>
                Si tiene alguna duda sobre este presupuesto no dude en
                comunicarse con nosotros
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={[styles.footerText, { alignSelf: "flex-start" }]}>
            PACIFIC
          </Text>
          <Text style={[styles.footerText, { alignSelf: "flex-start" }]}>
            Laguna Salada 22104, 14957
          </Text>
          <Text style={[styles.footerText, { alignSelf: "flex-start" }]}>
            Los Santos, Tijuana B.C
          </Text>
          <Text style={[styles.footerText, { alignSelf: "flex-start" }]}>
            664-622-32-04
          </Text>
          <Text style={[styles.footerText, { alignSelf: "flex-start" }]}>
            ventas@pacifichqs.tijuamex.com
          </Text>
          <Text style={[styles.footerText, { alignSelf: "flex-start" }]}>
            Visita nuestro sitio web: https://pacifichqs.tijuamex.com/
          </Text>
          <Text style={styles.date}>
            Fecha de la cotización: {currentDateTime}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default CreateQuote;
