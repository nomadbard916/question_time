import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Question from "../views/Question.vue";
// @ts-ignore
import QuestionEditor from "../views/QuestionEditor.vue"
// @ts-ignore
import AnswerEditor from "../views/AnswerEditor.vue"
// @ts-ignore
import NotFound from "../views/NotFound.vue"

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
    path: "/ask/:slug?",
    name: "question-editor",
    component: QuestionEditor,
    props: true
  },
  {
    path: "/answer/:id",
    name: "answer-editor",
    component: AnswerEditor,
    props: true
  },
  {
    path: "*",
    name: "page-not-found",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
