// Compiled by ClojureScript 1.7.170 {}
goog.provide('me_time.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('me_time.models.task_list');
me_time.handlers.app_db = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"day-start","day-start",-1157943924),"",new cljs.core.Keyword(null,"greeting","greeting",462222107),"Hello Clojure in iOS and Android!",new cljs.core.Keyword(null,"tasks","tasks",-1754368880),me_time.models.task_list.create_task_list.call(null)], null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return me_time.handlers.app_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-tasks","update-tasks",-1159303169),(function (db,p__18715){
var vec__18716 = p__18715;
var id = cljs.core.nth.call(null,vec__18716,(0),null);
var tasks = cljs.core.nth.call(null,vec__18716,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),tasks);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-greeting","set-greeting",-653540063),(function (db,p__18717){
var vec__18718 = p__18717;
var _ = cljs.core.nth.call(null,vec__18718,(0),null);
var value = cljs.core.nth.call(null,vec__18718,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"greeting","greeting",462222107),value);
}));

//# sourceMappingURL=handlers.js.map