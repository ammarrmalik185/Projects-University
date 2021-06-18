using System;
using System.Windows;
using System.Windows.Input;
using System.Xml;

namespace Lab_9___WPF {
    public partial class MainWindow {
        public MainWindow() {
            InitializeComponent();
            task3();
            // Box.Text = task4();
        }

        private void task3() {
            XmlWriterSettings settings = new XmlWriterSettings();
            settings.IndentChars = "\t";
            settings.Indent = true;
            XmlWriter w = XmlWriter.Create("\\activity 3.xml", settings);
            w.WriteStartDocument();
            w.WriteStartElement("catalog");

            w.WriteStartElement("product");
            w.WriteAttributeString("product_image", "cardigan.jpg");
            w.WriteAttributeString("discription", "Cardigan Sweater");

            // 1st catalog item
            w.WriteStartElement("catalog_item");
            w.WriteAttributeString("gender", "Men's");

            w.WriteElementString("item_number", "GWZ5671");
            w.WriteElementString("price", "39.95");

            w.WriteStartElement("size");
            w.WriteAttributeString("discription", "Medium");

            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "red_cardigan.jpg");
            w.WriteString("Red");
            w.WriteEndElement();
            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "burgundy_cardigan.jpg");
            w.WriteString("Burgundy");
            w.WriteEndElement();

            w.WriteEndElement();

            w.WriteStartElement("size");
            w.WriteAttributeString("discription", "Large");

            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "red_cardigan.jpg");
            w.WriteString("Red");
            w.WriteEndElement();
            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "burgundy_cardigan.jpg");
            w.WriteString("Burgundy");
            w.WriteEndElement();

            w.WriteEndElement();

            w.WriteEndElement();

            // 2nd catalog item
            w.WriteStartElement("catalog_item");
            w.WriteAttributeString("gender", "Women's");

            w.WriteElementString("item_number", "RRX9856");
            w.WriteElementString("price", "42.50");

            w.WriteStartElement("size");
            w.WriteAttributeString("discription", "Small");

            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "red_cardigan.jpg");
            w.WriteString("Red");
            w.WriteEndElement();
            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "navy_cardigan.jpg");
            w.WriteString("navy");
            w.WriteEndElement();
            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "burgundy_cardigan.jpg");
            w.WriteString("Burgundy");
            w.WriteEndElement();

            w.WriteEndElement();

            w.WriteStartElement("size");
            w.WriteAttributeString("discription", "Medium");

            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "red_cardigan.jpg");
            w.WriteString("Red");
            w.WriteEndElement();
            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "navy_cardigan.jpg");
            w.WriteString("navy");
            w.WriteEndElement();
            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "burgundy_cardigan.jpg");
            w.WriteString("Burgundy");
            w.WriteEndElement();

            w.WriteEndElement();

            w.WriteStartElement("size");
            w.WriteAttributeString("discription", "Large");

            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "navy_cardigan.jpg");
            w.WriteString("navy");
            w.WriteEndElement();
            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "black_cardigan.jpg");
            w.WriteString("Black");
            w.WriteEndElement();

            w.WriteEndElement();

            w.WriteStartElement("size");
            w.WriteAttributeString("discription", "Extra Large");

            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "burgundy_cardigan.jpg");
            w.WriteString("burgundy");
            w.WriteEndElement();
            w.WriteStartElement("color_swatch");
            w.WriteAttributeString("image", "black_cardigan.jpg");
            w.WriteString("Black");
            w.WriteEndElement();

            w.WriteEndElement();

            w.WriteEndElement();

            w.WriteEndElement();

            w.WriteEndDocument();
            w.Close();
        }

        private string task4() {
            string xmlString = "";
            int tabCount = 0;
            XmlTextReader reader = new XmlTextReader("\\activity 3.xml");
            while (reader.Read()) {
                switch (reader.NodeType) {
                    case XmlNodeType.Element:
                        xmlString += addTabs(tabCount);
                        xmlString += "<" + reader.Name;
                        for (int i = 0; i < reader.AttributeCount; i++) {
                            reader.MoveToAttribute(i);
                            xmlString += " " + reader.Name + "=" + reader.Value;
                        }

                        xmlString += ">\n";
                        tabCount++;
                        break;
                    case XmlNodeType.Text:
                        xmlString += addTabs(tabCount);
                        xmlString += reader.Value + "\n";
                        break;
                    case XmlNodeType.EndElement:
                        tabCount--;
                        xmlString += addTabs(tabCount);
                        xmlString += "<" + reader.Name;
                        for (int i = 0; i < reader.AttributeCount; i++) {
                            reader.MoveToAttribute(i);
                            xmlString += " " + reader.Name + "=" + reader.Value;
                        }

                        xmlString += ">\n";
                        break;
                }
            }

            return xmlString;
        }

        private string addTabs(int count) {
            string s = "";
            for (int i = 0; i < count; i++) {
                s += "\t";
            }
            return s;
        }
        
        
    }
}

