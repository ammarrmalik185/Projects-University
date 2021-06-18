package com.ammar.armsmanager;

public class helper_general {

    public static int[] addToList(int[] list, int addent){
        int[] list2 = new int[list.length + 1];
        for (int x = 0; x <list.length ; x++)
            list2[x] = list[x];

        list2[list2.length -1] = addent;
        return list2;
    }

    public static int[] removeFromList(int[] list , int subtract){
        int[] list2 = new int[0];
        for (int e:list)
            if (e != subtract)
                list2 = addToList(list2, e);
        return list2;
    }


    public static String[] addToList(String[] list, String addent){
        String[] list2 = new String[list.length + 1];
        for (int x = 0; x <list.length ; x++)
            list2[x] = list[x];

        list2[list2.length -1] = addent;
        return list2;
    }

    public static String[] removeFromList(String[] list , String subtract){
        String[] list2 = new String[0];
        for (String e:list)
            if (!e.equals(subtract))
                list2 = addToList(list2, e);
        return list2;
    }

    public static Object[] addToList(Object[] list, Object addent){
        Object[] list2 = new Object[list.length + 1];
        for (int x = 0; x <list.length ; x++)
            list2[x] = list[x];

        list2[list2.length -1] = addent;
        return list2;
    }

    public static Object[] removeFromList(Object[] list , Object subtract){
        Object[] list2 = new Object[0];
        for (Object e:list)
            if (!e.equals(subtract))
                list2 = addToList(list2, e);
        return list2;
    }


}
