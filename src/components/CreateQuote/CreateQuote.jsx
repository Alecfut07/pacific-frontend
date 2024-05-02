import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  View,
  Text,
} from "@react-pdf/renderer";
import EsquinaSuperiorIzquierda from "../../images/Quote/WithoutBackground/EsquinaSuperiorIzquierda.png";
import EsquinaSuperiorDerecha from "../../images/Quote/WithoutBackground/EsquinaSuperiorDerecha.png";
import Cotizacion from "../../images/Quote/WithoutBackground/TituloCotización.png";
import EmpresaLogo from "../../images/Quote/WithoutBackground/EmpresaLogo.png";
import PaginaWeb from "../../images/Quote/WithoutBackground/PaginaWeb.png";
import EsquinaInferiorIzquierda from "../../images/Quote/WithoutBackground/EsquinaInferiorIzquierda.png";
import EsquinaInferiorDerecha from "../../images/Quote/WithoutBackground/EsquinaInferiorDerecha.png";

// Registrar el font Arial
Font.register({
  family: "Arial",
  src: "https://fonts.gstatic.com/s/arimo/v14/P5sMz3DQpbjR0rJtF_8uMA.ttf",
});

// Estilos para el PDF.
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
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
  },
  dateContainer: {
    marginLeft: 10,
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    width: 100,
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
  },
  tableFooter: {
    borderTopWidth: 0,
  },
  text: {
    margin: "auto",
    fontSize: 12,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 12,
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
    fontsize: 10,
  },
  pageNumber: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontsize: 10,
  },
});

function CreateQuote({ cartItems, total, currentDateTime }) {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Cotización</Text>
            <Image src={EmpresaLogo} style={styles.logo} />
          </View>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.tableHeader]}>
              <Text># Item</Text>
            </View>
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
            <View key={item.product.id} style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>{item.product.id}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{item.product.name}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{item.product.quantity}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>${item.product.price} MXN</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>${item.product.subtotal} MXN</Text>
              </View>
            </View>
          ))}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.tableFooter]}></View>
            <View style={styles.tableCell}></View>
            <View style={styles.tableCell}></View>
            <View style={styles.tableCell}>
              <Text style={{ textAlign: "right" }}>Total:</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>${total} MXN</Text>
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
            Carlos@Pacific.com.mx
          </Text>
          <Text style={[styles.footerText, { alignSelf: "flex-start" }]}>
            Visita nuestro sitio web: www.Pacific.com.mx
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
