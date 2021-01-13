export default [
    {
        path:'/statistika/table-frekuensi',
        name:'TableFrekuensi',
        component:() => import('../views/statistika/TableFrekuensi.vue')
    },
    {
        path:'/statistika/ungrouped-data',
        name:'UngroupedData',
        component:() => import('../views/statistika/UngroupedData.vue')
    },
    {
        path:'/statistika/grouped-data',
        name:'GroupedData',
        component:() => import('../views/statistika/GroupedData.vue')
    }
]