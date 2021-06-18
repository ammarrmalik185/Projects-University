package com.ammar.armsmanager;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class unassign extends AppCompatActivity {

    valuesCommander values;
    EditText edit;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_unassign);

        values= new valuesCommander();
        values.generate_dud_records();
        edit = findViewById(R.id.editText11);
    }

    public void unassign_button(View view){

        String weapon_name = edit.getText().toString();
        if (values.Wexists(weapon_name) != -1)
            if (values.weaponRecords.get(values.Wexists(weapon_name)).isAssigned())
            {

                values.unassign(weapon_name);
                Toast.makeText(unassign.this, "Weapon unassigned",Toast.LENGTH_LONG).show();
                values.totalupdate();

            }
            else Toast.makeText(unassign.this, "Weapon is not assigned",Toast.LENGTH_LONG).show();
        else Toast.makeText(unassign.this, "Weapon does not exist", Toast.LENGTH_LONG).show();

    }
}
