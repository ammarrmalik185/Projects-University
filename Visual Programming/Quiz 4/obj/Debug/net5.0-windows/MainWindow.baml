   M S B A M L   `   `   `  ����A  =Quiz 4, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullclr-namespace:Quiz_4Quiz_4  5   	       Quiz_4.MainWindow   5   	   R NWindowsBase, Version=5.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=5.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=5.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=5.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=5.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   &localclr-namespace:Quiz_4     5   	     � Title$  
MainWindow��5   	   $	��450��6   $	��800��6)   .��5	      � .+�5
   
   o� $��20��6   $	��Top=�6   $��0,0,10,0q�63   .@�5      m� $
��Edit��6   $��20��6%   $��68��61   .@�5      m� $
��Copy��6   $
��Left=�6)   $��20��6D   $	��173��6P   m� 5      $	��Cut��6   $
��Left=�6(   $��20��6C   $	��173��6O   m� 5      -   5         m� InputGestureText$ Ctrl+T��5   4   $��	Time/Date��6N   $
��Left=�6a   $��20��6|   $	��173��6�   5      5      �� 5   
   -   5         ��Name$ TextBox��5      $��23��6#   $��	0,25,10,0q�6/    �� TextWrapping$
 Wrap=�6B   $��TextBox��6V   $	��Top=�6e   5       J� InputBindings 5      �� 5   
   
 �� Key$ T��6    �� 	Modifiers$ Controlf�6    �� Command 61   ��  �� Path$ TimeCommand�6Z   5      