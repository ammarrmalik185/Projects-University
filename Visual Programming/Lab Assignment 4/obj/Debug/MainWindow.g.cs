﻿#pragma checksum "..\..\MainWindow.xaml" "{8829d00f-11b8-4213-878b-770e8597ac16}" "151B32EB6FCE046337ED68E3FC96DAF733470F9ED19C725DA60B37909FDB5944"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using Lab_Assignment_4;
using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;


namespace Lab_Assignment_4 {
    
    
    /// <summary>
    /// MainWindow
    /// </summary>
    public partial class MainWindow : System.Windows.Window, System.Windows.Markup.IComponentConnector {
        
        
        #line 40 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox studentSearch_sName;
        
        #line default
        #line hidden
        
        
        #line 42 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox studentSearch_sReg;
        
        #line default
        #line hidden
        
        
        #line 45 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox courseSearch_cName;
        
        #line default
        #line hidden
        
        
        #line 47 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox courseSearch_cCode;
        
        #line default
        #line hidden
        
        
        #line 58 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.DataGrid DataViewer;
        
        #line default
        #line hidden
        
        
        #line 84 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox studentAdd_sName;
        
        #line default
        #line hidden
        
        
        #line 86 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox studentAdd_sReg;
        
        #line default
        #line hidden
        
        
        #line 89 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox courseAdd_cName;
        
        #line default
        #line hidden
        
        
        #line 91 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox courseAdd_cCode;
        
        #line default
        #line hidden
        
        
        #line 94 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox enrolmentAdd_sReg;
        
        #line default
        #line hidden
        
        
        #line 96 "..\..\MainWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox enrolmentAdd_cCode;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/Lab Assignment 4;component/mainwindow.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\MainWindow.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            this.studentSearch_sName = ((System.Windows.Controls.TextBox)(target));
            return;
            case 2:
            this.studentSearch_sReg = ((System.Windows.Controls.TextBox)(target));
            return;
            case 3:
            this.courseSearch_cName = ((System.Windows.Controls.TextBox)(target));
            return;
            case 4:
            this.courseSearch_cCode = ((System.Windows.Controls.TextBox)(target));
            return;
            case 5:
            
            #line 49 "..\..\MainWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.ButtonClick_Search_Students);
            
            #line default
            #line hidden
            return;
            case 6:
            
            #line 50 "..\..\MainWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.ButtonClick_Search_Courses);
            
            #line default
            #line hidden
            return;
            case 7:
            
            #line 52 "..\..\MainWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.ButtonClick_Query_StudentsWithoutCourses);
            
            #line default
            #line hidden
            return;
            case 8:
            
            #line 53 "..\..\MainWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.ButtonClick_Query_CoursesWithoutStudents);
            
            #line default
            #line hidden
            return;
            case 9:
            
            #line 54 "..\..\MainWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.ButtonClick_Query_AllStudentsCourses);
            
            #line default
            #line hidden
            return;
            case 10:
            this.DataViewer = ((System.Windows.Controls.DataGrid)(target));
            return;
            case 11:
            this.studentAdd_sName = ((System.Windows.Controls.TextBox)(target));
            return;
            case 12:
            this.studentAdd_sReg = ((System.Windows.Controls.TextBox)(target));
            return;
            case 13:
            this.courseAdd_cName = ((System.Windows.Controls.TextBox)(target));
            return;
            case 14:
            this.courseAdd_cCode = ((System.Windows.Controls.TextBox)(target));
            return;
            case 15:
            this.enrolmentAdd_sReg = ((System.Windows.Controls.TextBox)(target));
            return;
            case 16:
            this.enrolmentAdd_cCode = ((System.Windows.Controls.TextBox)(target));
            return;
            case 17:
            
            #line 98 "..\..\MainWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.ButtonClick_Add_Student);
            
            #line default
            #line hidden
            return;
            case 18:
            
            #line 99 "..\..\MainWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.ButtonClick_Add_Course);
            
            #line default
            #line hidden
            return;
            case 19:
            
            #line 100 "..\..\MainWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.ButtonClick_Add_Enrolment);
            
            #line default
            #line hidden
            return;
            }
            this._contentLoaded = true;
        }
    }
}

