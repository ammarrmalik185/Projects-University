package com.ammar.armsmanager;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class assign_activity extends AppCompatActivity {
    valuesCommander values;
    EditText edit_1;
    EditText edit_2;
    EditText edit_3;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.edit_activity);
        values = new valuesCommander();
        values.generate_dud_records();
        edit_1 = findViewById(R.id.editText);
        edit_2 = findViewById(R.id.editText2);
        edit_3 = findViewById(R.id.editText3);

    }

    public void assign_button(View view){

        String weapon_name = edit_1.getText().toString();
        String dealer_name = edit_2.getText().toString();
        int quantity;
        try {
            quantity = Integer.parseInt(edit_3.getText().toString());
        }
        catch(Exception e){
            quantity = 0;
        }
        int dealer_index = values.Dexists(dealer_name);
        int weapon_index = values.Wexists(weapon_name);

        if (weapon_index != -1)
            if (dealer_index != -1)
                if(!values.weaponRecords.get(weapon_index).isAssigned())
                    if (values.dealerRecords.get(dealer_index).assigned_quantity.length<10)

                    {

                        values.assign(dealer_index, weapon_name,quantity);
                        Toast.makeText(assign_activity.this,"Weapon has been assigned",Toast.LENGTH_LONG).show();
                        values.totalupdate();

                    }

                        else Toast.makeText(assign_activity.this,"Dealer already has 10 weapons assigned",Toast.LENGTH_LONG).show();
                    else Toast.makeText(assign_activity.this,"Weapon already assigned to a dealer",Toast.LENGTH_LONG).show();
                else Toast.makeText(assign_activity.this,"Dealer does not exist",Toast.LENGTH_LONG).show();
        else Toast.makeText(assign_activity.this,"Weapon does not exist",Toast.LENGTH_LONG).show();


    }
}
