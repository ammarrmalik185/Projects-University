package com.ammar.armsmanager;

import java.sql.*;
import java.util.ArrayList;

public class customer {

    public int id;
    private String name;
    private String country;
    private String contact_number;
    private String licenceno;
    private String[] purchase = new String[0];

    private boolean allowed = true;
    private String[] receipts = new String[0];

    public customer(int id,String name, String country, String contno, String licenceno){

        this.id = id;
        this.name = name;
        this.contact_number = contno;
        this.country = country;
        this.licenceno = licenceno;

    }
    public void modifyInfo(String country, String contno, String licenceno){
        this.contact_number = contno;
        this.country = country;
        this.licenceno = licenceno;

    }
    public Object[] getInfo(){
        return new String[] {this.name, this.contact_number, this.country, this.licenceno};
    }


    public void saveToDb(Connection connection){
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String sql= "INSERT INTO `Customer` " +
                    "(`Serial No`, `Customer Name`, `Customer License No`, `Customer Contact No`, `Customer Country`) " +
                    "VALUES (?,?,?,?,?)";
            PreparedStatement connect =connection.prepareStatement(sql);
            connect.setString(1,Integer.toString(this.id+1));
            connect.setString(2,this.name);
            connect.setString(3,this.licenceno);
            connect.setString(4,this.contact_number);
            connect.setString(5,this.country);
            connect.executeUpdate();

        }catch (Exception e){
            e.printStackTrace();
        }
    }
    public boolean search(String key){

        return this.name.contains(key) || this.country.contains(key) || this.contact_number.contains(key) ||this.licenceno.contains(key);

    }

    public void update(Connection connection){

        try {
            Class.forName("com.mysql.jdbc.Driver");
            String sql= "UPDATE `Customer` set `Customer Name`=?, `Customer License No`=?, `Customer Contact No`=?, `Customer Country`=? where `Serial No`=?";
            PreparedStatement connect =connection.prepareStatement(sql);
            connect.setString(1,name);
            connect.setString(2,licenceno);
            connect.setString(3,contact_number);
            connect.setString(4,country);
            connect.setString(5,Integer.toString(id+1));
            connect.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    public String list(ArrayList<purchase> records) {
        String ret = ("Customer name   : " + name + "\n" +
                "Customer country: " + country + "\n" +
                "Customer contact: " + contact_number + "\n" +
                "Customer licence no : " + licenceno + "\n"
                + "Customer Receipts: \n--------------------\n");

        for (purchase p:records)
        if (name.equals(p.Customer_name))
        {
            ret += p.receipt();
            ret += "\n--------------------\n";
        }

        return ret;
    }
}
