using System;
using System.IO;
using System.Windows;
using System.Xml;

namespace Lab_Assignment_3 {

    public partial class MainWindow{
        public MainWindow() {
            InitializeComponent();
        }

        private void ButtonClick_Go(object sender, RoutedEventArgs e) {
            string path = XMlPath.Text;
            try {
                XmlTextReader reader = new XmlTextReader(path);
                XMLViewer.Text = getXMLText(reader);
            }
            catch (ArgumentException) {
                XMLViewer.Text = "Enter a file path";
            }
            catch (FileNotFoundException) {
                XMLViewer.Text = "File does not exist";
            }
            catch (DirectoryNotFoundException) {
                XMLViewer.Text = "Directory does not exist";
            }
            catch (UnauthorizedAccessException) {
                XMLViewer.Text = "Give Path to a file";
            }
            catch (XmlException) {
                XMLViewer.Text = "The file is not a valid XML document";
            }
            catch (IOException) {
                XMLViewer.Text = "The file path syntax is incorrect";
            }
            catch (Exception ex) {
                XMLViewer.Text = ex.Message;
            }
        }
        
        private string getXMLText(XmlTextReader reader) {
            string xmlString = "";
            int tabCount = 0;
            while (reader.Read()) {
                switch (reader.NodeType) {
                    
                    case XmlNodeType.Element:
                        bool isSelfClosing = reader.IsEmptyElement;
                        if (headTag.IsChecked == true) {
                            if (addTabs.IsChecked == true) {
                                xmlString += getTabString(tabCount);
                            }
                            xmlString += "<";
                            xmlString += reader.Name;
                            if (headAttributes.IsChecked == true) {
                                for (int i = 0; i < reader.AttributeCount; i++) {
                                    reader.MoveToAttribute(i);
                                    xmlString += " " + reader.Name + "=\"" + reader.Value + "\"";
                                }
                            }

                            if (isSelfClosing)
                                xmlString += "/";
                            xmlString += ">";
                            xmlString += "\n";
                        }
                        if (!isSelfClosing)
                            tabCount++;
                        break;
                    
                    case XmlNodeType.Text:
                        if (elementValue.IsChecked == true) {
                            if (addTabs.IsChecked == true) {
                                xmlString += getTabString(tabCount);
                            }
                            xmlString += reader.Value + "\n";
                        }
                        tabCount--;
                        break;
                    
                    case XmlNodeType.EndElement:
                        tabCount--;
                        if (endTag.IsChecked == true) {
                            if (addTabs.IsChecked == true) {
                                xmlString += getTabString(tabCount);
                            }
                            xmlString += "</" + reader.Name;
                            if (endAttributes.IsChecked == true) {
                                for (int i = 0; i < reader.AttributeCount; i++) {
                                    reader.MoveToAttribute(i);
                                    xmlString += " " + reader.Name + "=\"" + reader.Value + "\"";
                                }
                            }

                            xmlString += ">";
                            xmlString += "\n";
                        }
                        break;
                    
                }
            }

            return xmlString;
        }
        
        private string getTabString(int count) {
            string s = "";
            for (int i = 0; i < count; i++) {
                s += "\t";
            }

            return s;
        }
        
    }
}