import { Document, Text, Page, StyleSheet, Image } from "@react-pdf/renderer";

function CreateQuote() {
  return (
    <Document>
      <Page>
        <Text>Hello World!</Text>
      </Page>
    </Document>
  );
}

export default CreateQuote;
