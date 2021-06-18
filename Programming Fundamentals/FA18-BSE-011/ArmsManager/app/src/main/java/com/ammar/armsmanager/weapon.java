package com.ammar.armsmanager;

import java.io.File;
import java.io.FileWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class weapon {

    private String model_name;
    private String manufacturer_name;
    private String country;
    private int price;
    public int id;



    private boolean assigned = false;

    private int assignedTo = -1;

    public weapon(int id, String model_name, String manuf_name, String country, int price){

        this.model_name = model_name;
        this.manufacturer_name = manuf_name;
        this.country = country;
        this.price = price;
        this.id = id;

    }

    public String[] getInfo(){
        return new String[] {this.model_name, this.manufacturer_name, this.country, Integer.toString(price)};
    }

    public void modifyInfo(String manuf_name, String country, int price){

        this.manufacturer_name = manuf_name;
        this.country = country;
        this.price = price;

    }

    public void assign(int did,boolean set) {
        this.assigned = set;
        this.assignedTo = did;
    }

    public boolean isAssigned(){
        return this.assigned;
    }

    public int dealerId(){
        return assignedTo;
    }


    public void saveToDb(Connection connection){

        try {
            Class.forName("com.mysql.jdbc.Driver");
            String sql= "INSERT INTO `Weapons` " +
                    "(`Serial_No`, `Model Name`, `Manufacturer Name`, `Price`, `Country`) " +
                    "VALUES (?,?,?,?,?)";
            PreparedStatement connect =connection.prepareStatement(sql);
            connect.setString(1,Integer.toString(this.id+1));
            connect.setString(2,this.model_name);
            connect.setString(3,this.manufacturer_name);
            connect.setString(4,Integer.toString(this.price));
            connect.setString(5,this.country);
            connect.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }

    }


    public void update(Connection connection){

        try {
            Class.forName("com.mysql.jdbc.Driver");
            String sql= "UPDATE `Weapons` set `Model Name`=?, `Manufacturer Name`=?, `Price`=?, `Country`=? where `Serial_No`=?";
            PreparedStatement connect =connection.prepareStatement(sql);
            connect.setString(1,model_name);
            connect.setString(2,manufacturer_name);
            connect.setString(3,Integer.toString(price));
            connect.setString(4,country);
            connect.setString(5,Integer.toString(id+1));
            connect.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }

    }


    public boolean search(String key){

        return this.manufacturer_name.contains(key) || this.model_name.contains(key) || this.country.contains(key) ||Integer.toString(this.price).contains(key);

    }
    public String list() {
        String ret = ("Weapon Model   : " + model_name + "\n" +
                      "Weapon Manufacturer: " + manufacturer_name + "\n" +
                      "Weapon Country: " + country + "\n" +
                      "Weapon Price : " + price);

        return ret;
    }

}

