package com.ammar.armsmanager;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class quantity_editor extends AppCompatActivity {
    valuesCommander values;

    EditText edit_1;
    EditText edit_2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_quantity_editor);
        values = new valuesCommander();
        values.generate_dud_records();
        edit_1 = findViewById(R.id.editText9);
        edit_2 = findViewById(R.id.editText10);

    }

    public void modify_quantity(View view){

        String weapon_name = edit_1.getText().toString();
        int quantity;
        try{
            quantity = Integer.parseInt(edit_2.getText().toString());
        }
        catch(Exception e){
            quantity = 0;
        }

        if (values.Wexists(weapon_name) != -1)
            if(values.weaponRecords.get(values.Wexists(weapon_name)).isAssigned())
            {

                weapon w= values.weaponRecords.get(values.Wexists(weapon_name));
                int did = w.dealerId();
                values.dealerRecords.get(did).assigned_quantity[values.dealerRecords.get(did).isAssigned(weapon_name)] = quantity;
                Toast.makeText(quantity_editor.this,"Quantity updated",Toast.LENGTH_LONG).show();
                values.totalupdate();
            }
            else Toast.makeText(quantity_editor.this,"Weapon is not assigned, only assigned weapons can have quantities",Toast.LENGTH_LONG).show();
        else Toast.makeText(quantity_editor.this,"Weapon does not exist",Toast.LENGTH_LONG).show();





    }

}

