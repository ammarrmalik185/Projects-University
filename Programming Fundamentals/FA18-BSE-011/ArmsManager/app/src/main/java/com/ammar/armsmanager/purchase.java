package com.ammar.armsmanager;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class purchase {
    public String Customer_name;
    private String Dealer_name;
    private String Weapon_Name;
    private String Price;
    private String priceOfOne;
    private String Quantity;
    public int id;

    public purchase(String Customer_name,String Dealer_name,String Weapon_Name,String Price,String Quantity,int id){
        this.Customer_name = Customer_name;
        this.Dealer_name = Dealer_name;
        this.Weapon_Name = Weapon_Name;
        this.Price = Price;
        this.Quantity = Quantity;
        try{this.priceOfOne = Integer.toString( Integer.parseInt(Price)/Integer.parseInt(Quantity));}
        catch(Exception e){this.priceOfOne = this.Price;}
        this.id = id;
    }

    public void saveToDb(Connection connection) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String sql = "INSERT INTO `Purchase` " +
                    "(`Serial_No`, `Customer Name`, `Dealer Name`, `Weapon Name`, `Quantity`, `Price` ) " +
                    "VALUES (?,?,?,?,?,?)";
            PreparedStatement connect = connection.prepareStatement(sql);
            connect.setString(1, Integer.toString(id + 1));
            connect.setString(2, Customer_name);
            connect.setString(3, Dealer_name);
            connect.setString(4, Weapon_Name);
            connect.setString(5, Quantity);
            connect.setString(6, Price);
            connect.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void update(Connection connection){

        try {
            Class.forName("com.mysql.jdbc.Driver");
            String sql= "UPDATE `Purchase` set `Customer Name`=?, `Dealer Name`=?, `Weapon Name`=?, `Quantity`=?," +
                    " `Price`=? where `Serial_No`=?";
            PreparedStatement connect =connection.prepareStatement(sql);
            connect.setString(1,Customer_name);
            connect.setString(2,Dealer_name);
            connect.setString(3,Weapon_Name);
            connect.setString(4,Quantity);
            connect.setString(5,Price);
            connect.setString(6,Integer.toString(id+1));
            connect.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    public String receipt(){
        String rec = "RECEIPT\n";
        rec +="Weapon name- \n" + this.Weapon_Name + "\n";
        rec +="Dealer name- \n" + this.Dealer_name+ "\n";
        rec +="Customer name- \n" + this.Customer_name+ "\n";
        rec +="Price of weapon- \n" + this.priceOfOne + "\n";
        rec +="Quantity- \n" + this.Quantity+ "\n";
        rec +="Net Price- \n" + this.Price+ "\n";

        return rec;
    }
}
