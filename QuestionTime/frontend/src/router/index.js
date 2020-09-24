import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Question from "../views/Question.vue";
// @ts-ignore
import QuestionEditor from "../views/QuestionEditor.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/question/:slug",
    name: "question",
    component: Question,
    // let :slug passed to Question component as props
    props: true
  },
  {
    path: "/ask/:id",
    name: "question-editor",
    component: QuestionEditor,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
