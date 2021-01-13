export default [
    {
        path:'/statistika/table-frekuensi',
        name:'TableFrekuensi',
        component:() => import('../views/statistika/TableFrekuensi.vue')
    },
    {
        path:'/statistika/ukuran-statistika',
        name:'UngroupedData',
        component:() => import('../views/statistika/UngroupedData.vue')
    },
    {
        path:'/statistika/ukuran-statistika',
        name:'GroupedData',
        component:() => import('../views/statistika/GroupedData.vue')
    },
    {
        path:'/statistika/modus',
        name:'Modus',
        component:() => import('../views/statistika/Modus.vue')
    }
]