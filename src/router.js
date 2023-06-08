import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import WelcomePage from "@/components/WelcomePage";
import NotFound from "@/components/utils/NotFound";
import FoundLostChoice from "@/components/process/FoundLostChoice";
import MapChoose from "@/components/process/MapChoose";
import TheRegister from "@/components/process/TheRegister";
import TheItem from "@/components/core/board/TheItem";
import TheWholeBoard from "@/components/core/board/TheWholeBoard";
import VerifyAccount from "@/components/utils/VerifyAccount";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: WelcomePage},
        {path: '/process', component: FoundLostChoice},
        {path: '/maps', component: MapChoose},
        {path: '/register', component: TheRegister},
        {path: '/verify' , component: VerifyAccount}, // todo: remake with id
        {path: '/board', component: TheWholeBoard},
        {path: '/board-item', component: TheItem}, // todo: remake with id
        {path: '/:notFound(.*)', component: NotFound},

    ]

});

export default router
