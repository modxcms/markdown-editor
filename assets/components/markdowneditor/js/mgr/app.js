var MarkdownEditor=function(e){e=e||{},MarkdownEditor.superclass.constructor.call(this,e)};Ext.override(MODx.panel.Resource,{}),Ext.extend(MarkdownEditor,Ext.Component,{initComponent:function(){MarkdownEditor.superclass.initComponent.call(this),Ext.onReady(this.render,this)},buildUI:function(){this.textarea.hide(),this.textarea.setWidth(0),this.textarea.setHeight(0);var e=Ext.DomHelper.insertBefore(this.textarea,{tag:"div"});Ext.DomHelper.append(e,{tag:"div",id:"content-md","class":this.textarea.dom.className}),Ext.DomHelper.append(e,{tag:"div",id:"preview-md"}),Ext.DomHelper.append(e,{tag:"div",id:"toolbox",cn:[{tag:"span",id:"preview-button",html:'<i class="icon icon-toggle-off"></i> Preview'}]}),Ext.DomHelper.append(e,{tag:"span",style:"clear: both"})},registerAce:function(){this.editor=ace.edit(Ext.DomQuery.selectNode("div#content-md")),this.editor.setOptions({maxLines:1/0,minLines:10,showPrintMargin:!1}),this.editor.renderer.setShowGutter(!1),this.editor.getSession().setValue(this.textarea.getValue()),this.editor.getSession().setMode("ace/mode/markdown"),this.editor.setTheme("ace/theme/monokai")},languageOverrides:{js:"javascript",html:"xml"},registerMarked:function(){var e=this,t=new marked.Renderer;t.code=function(e,t,i){if(this.options.highlight){var o=this.options.highlight(e,t);null!=o&&o!==e&&(i=!0,e=o)}return t?'<pre><code class="hljs '+this.options.langPrefix+escape(t,!0)+'">'+(i?e:escape(e,!0))+"\n</code></pre>\n":"<pre><code>"+(i?e:escape(e,!0))+"\n</code></pre>"},marked.setOptions({highlight:function(t,i){return e.languageOverrides[i]&&(i=e.languageOverrides[i]),-1!=hljs.listLanguages().indexOf(i)?hljs.highlight(i,t).value:t},renderer:t})},render:function(){var e=this;this.textarea=Ext.get("ta"),this.buildUI(),this.registerAce(),this.registerMarked();var t=Ext.get("preview-button"),i=Ext.get("preview-md"),o=Ext.get("content-md");t.addListener("click",function(){i.isVisible()?(i.hide(),o.show(),t.child("i").removeClass("icon-toggle-on"),t.child("i").addClass("icon-toggle-off")):(i.show(),o.hide(),t.child("i").removeClass("icon-toggle-off"),t.child("i").addClass("icon-toggle-on"))}),i.update(marked(this.editor.getValue())),this.editor.getSession().on("change",function(){i.update(marked(e.editor.getValue()))})}}),MarkdownEditor=new MarkdownEditor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFBLGdCQUFBLFNBQUEsR0FDQSxFQUFBLE1BQ0EsZUFBQSxXQUFBLFlBQUEsS0FBQSxLQUFBLEdBRUEsS0FBQSxTQUFBLEtBQUEsTUFBQSxhQUVBLElBQUEsT0FBQSxlQUFBLElBQUEsV0FDQSxjQUFBLFdBQ0EsZUFBQSxXQUFBLGNBQUEsS0FBQSxNQUVBLElBQUEsUUFBQSxLQUFBLE9BQUEsT0FHQSxRQUFBLFdBQ0EsS0FBQSxTQUFBLE9BQ0EsS0FBQSxTQUFBLFNBQUEsR0FDQSxLQUFBLFNBQUEsVUFBQSxFQUVBLElBQUEsR0FBQSxJQUFBLFVBQUEsYUFBQSxLQUFBLFVBQUEsSUFBQSxPQUVBLEtBQUEsVUFBQSxPQUFBLEdBQ0EsSUFBQSxNQUNBLEdBQUEsYUFDQSxRQUFBLEtBQUEsU0FBQSxJQUFBLFlBR0EsSUFBQSxVQUFBLE9BQUEsR0FDQSxJQUFBLE1BQ0EsR0FBQSxlQUdBLElBQUEsVUFBQSxPQUFBLEdBQ0EsSUFBQSxNQUNBLEdBQUEsVUFDQSxLQUNBLElBQUEsT0FDQSxHQUFBLGlCQUNBLEtBQUEsbURBSUEsSUFBQSxVQUFBLE9BQUEsR0FDQSxJQUFBLE9BQ0EsTUFBQSxpQkFJQSxZQUFBLFdBQ0EsS0FBQSxPQUFBLElBQUEsS0FBQSxJQUFBLFNBQUEsV0FBQSxtQkFDQSxLQUFBLE9BQUEsWUFDQSxTQUFBLElBQ0EsU0FBQSxHQUNBLGlCQUFBLElBRUEsS0FBQSxPQUFBLFNBQUEsZUFBQSxHQUNBLEtBQUEsT0FBQSxhQUFBLFNBQUEsS0FBQSxTQUFBLFlBQ0EsS0FBQSxPQUFBLGFBQUEsUUFBQSxxQkFDQSxLQUFBLE9BQUEsU0FBQSxzQkFHQSxtQkFDQSxHQUFBLGFBQ0EsS0FBQSxPQUdBLGVBQUEsV0FDQSxHQUFBLEdBQUEsS0FDQSxFQUFBLEdBQUEsUUFBQSxRQUVBLEdBQUEsS0FBQSxTQUFBLEVBQUEsRUFBQSxHQUNBLEdBQUEsS0FBQSxRQUFBLFVBQUEsQ0FDQSxHQUFBLEdBQUEsS0FBQSxRQUFBLFVBQUEsRUFBQSxFQUNBLE9BQUEsR0FBQSxJQUFBLElBQ0EsR0FBQSxFQUNBLEVBQUEsR0FJQSxNQUFBLEdBTUEsMEJBQ0EsS0FBQSxRQUFBLFdBQ0EsT0FBQSxHQUFBLEdBQ0EsTUFDQSxFQUFBLEVBQUEsT0FBQSxHQUFBLElBQ0Esb0JBVkEsZUFDQSxFQUFBLEVBQUEsT0FBQSxHQUFBLElBQ0EsbUJBV0EsT0FBQSxZQUNBLFVBQUEsU0FBQSxFQUFBLEdBRUEsTUFEQSxHQUFBLGtCQUFBLEtBQUEsRUFBQSxFQUFBLGtCQUFBLElBQ0EsSUFBQSxLQUFBLGdCQUFBLFFBQUEsR0FBQSxLQUFBLFVBQUEsRUFBQSxHQUFBLE1BQUEsR0FFQSxTQUFBLEtBSUEsT0FBQSxXQUNBLEdBQUEsR0FBQSxJQUNBLE1BQUEsU0FBQSxJQUFBLElBQUEsTUFFQSxLQUFBLFVBQ0EsS0FBQSxjQUNBLEtBQUEsZ0JBVUEsSUFBQSxHQUFBLElBQUEsSUFBQSxrQkFDQSxFQUFBLElBQUEsSUFBQSxjQUNBLEVBQUEsSUFBQSxJQUFBLGFBRUEsR0FBQSxZQUFBLFFBQUEsV0FDQSxFQUFBLGFBQ0EsRUFBQSxPQUNBLEVBQUEsT0FFQSxFQUFBLE1BQUEsS0FBQSxZQUFBLGtCQUNBLEVBQUEsTUFBQSxLQUFBLFNBQUEscUJBRUEsRUFBQSxPQUNBLEVBQUEsT0FFQSxFQUFBLE1BQUEsS0FBQSxZQUFBLG1CQUNBLEVBQUEsTUFBQSxLQUFBLFNBQUEscUJBSUEsRUFBQSxPQUFBLE9BQUEsS0FBQSxPQUFBLGFBQ0EsS0FBQSxPQUFBLGFBQUEsR0FBQSxTQUFBLFdBQ0EsRUFBQSxPQUFBLE9BQUEsRUFBQSxPQUFBLGtCQUlBLGVBQUEsR0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTWFya2Rvd25FZGl0b3IgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgTWFya2Rvd25FZGl0b3Iuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsY29uZmlnKTtcbn07XG5FeHQub3ZlcnJpZGUoTU9EeC5wYW5lbC5SZXNvdXJjZSwge30pO1xuXG5FeHQuZXh0ZW5kKE1hcmtkb3duRWRpdG9yLEV4dC5Db21wb25lbnQse1xuICAgIGluaXRDb21wb25lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBNYXJrZG93bkVkaXRvci5zdXBlcmNsYXNzLmluaXRDb21wb25lbnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBFeHQub25SZWFkeSh0aGlzLnJlbmRlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgLGJ1aWxkVUk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnRleHRhcmVhLmhpZGUoKTtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5zZXRXaWR0aCgwKTtcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5zZXRIZWlnaHQoMCk7XG5cbiAgICAgICAgdmFyIHdyYXBwZXIgPSBFeHQuRG9tSGVscGVyLmluc2VydEJlZm9yZSh0aGlzLnRleHRhcmVhLCB7dGFnOiAnZGl2J30pO1xuXG4gICAgICAgIEV4dC5Eb21IZWxwZXIuYXBwZW5kKHdyYXBwZXIse1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAnY29udGVudC1tZCcsXG4gICAgICAgICAgICBjbGFzczogdGhpcy50ZXh0YXJlYS5kb20uY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIEV4dC5Eb21IZWxwZXIuYXBwZW5kKHdyYXBwZXIse1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGlkOiAncHJldmlldy1tZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRXh0LkRvbUhlbHBlci5hcHBlbmQod3JhcHBlcix7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgaWQ6ICd0b29sYm94JyxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgIGlkOiAncHJldmlldy1idXR0b24nLFxuICAgICAgICAgICAgICAgIGh0bWw6ICc8aSBjbGFzcz1cImljb24gaWNvbi10b2dnbGUtb2ZmXCI+PC9pPiBQcmV2aWV3J1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgRXh0LkRvbUhlbHBlci5hcHBlbmQod3JhcHBlcix7XG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIHN0eWxlOiAnY2xlYXI6IGJvdGgnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAscmVnaXN0ZXJBY2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmVkaXRvciA9IGFjZS5lZGl0KEV4dC5Eb21RdWVyeS5zZWxlY3ROb2RlKCdkaXYjY29udGVudC1tZCcpKTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICBtYXhMaW5lczogSW5maW5pdHksXG4gICAgICAgICAgICBtaW5MaW5lczogMTAsXG4gICAgICAgICAgICBzaG93UHJpbnRNYXJnaW46IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVkaXRvci5yZW5kZXJlci5zZXRTaG93R3V0dGVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldFZhbHVlKHRoaXMudGV4dGFyZWEuZ2V0VmFsdWUoKSk7XG4gICAgICAgIHRoaXMuZWRpdG9yLmdldFNlc3Npb24oKS5zZXRNb2RlKFwiYWNlL21vZGUvbWFya2Rvd25cIik7XG4gICAgICAgIHRoaXMuZWRpdG9yLnNldFRoZW1lKFwiYWNlL3RoZW1lL21vbm9rYWlcIik7XG4gICAgfVxuXG4gICAgLGxhbmd1YWdlT3ZlcnJpZGVzOiB7XG4gICAgICAgIGpzOiAnamF2YXNjcmlwdCdcbiAgICAgICAgLGh0bWw6ICd4bWwnXG4gICAgfVxuXG4gICAgLHJlZ2lzdGVyTWFya2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1kZSA9IHRoaXM7XG4gICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBtYXJrZWQuUmVuZGVyZXIoKTtcblxuICAgICAgICByZW5kZXJlci5jb2RlID0gZnVuY3Rpb24oY29kZSwgbGFuZywgZXNjYXBlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3V0ID0gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChjb2RlLCBsYW5nKTtcbiAgICAgICAgICAgICAgICBpZiAob3V0ICE9IG51bGwgJiYgb3V0ICE9PSBjb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb2RlID0gb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFsYW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICc8cHJlPjxjb2RlPidcbiAgICAgICAgICAgICAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICAgICAgICAgICAgICArICdcXG48L2NvZGU+PC9wcmU+JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICc8cHJlPjxjb2RlIGNsYXNzPVwiaGxqcyAnXG4gICAgICAgICAgICArIHRoaXMub3B0aW9ucy5sYW5nUHJlZml4XG4gICAgICAgICAgICArIGVzY2FwZShsYW5nLCB0cnVlKVxuICAgICAgICAgICAgKyAnXCI+J1xuICAgICAgICAgICAgKyAoZXNjYXBlZCA/IGNvZGUgOiBlc2NhcGUoY29kZSwgdHJ1ZSkpXG4gICAgICAgICAgICArICdcXG48L2NvZGU+PC9wcmU+XFxuJztcbiAgICAgICAgfTtcblxuICAgICAgICBtYXJrZWQuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGNvZGUsIGxhbmcpe1xuICAgICAgICAgICAgICAgIGlmKG1kZS5sYW5ndWFnZU92ZXJyaWRlc1tsYW5nXSkgbGFuZyA9IG1kZS5sYW5ndWFnZU92ZXJyaWRlc1tsYW5nXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGhsanMubGlzdExhbmd1YWdlcygpLmluZGV4T2YobGFuZykgIT0gLTEpID8gaGxqcy5oaWdobGlnaHQobGFuZywgY29kZSkudmFsdWUgOiBjb2RlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbmRlcmVyOiByZW5kZXJlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAscmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1kZSA9IHRoaXM7XG4gICAgICAgIHRoaXMudGV4dGFyZWEgPSBFeHQuZ2V0KCd0YScpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRVSSgpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQWNlKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJNYXJrZWQoKTtcblxuXG4gICAgICAgIC8vIGNvcHkgYmFjayB0byB0ZXh0YXJlYSBvbiBmb3JtIHN1Ym1pdC4uLlxuICAgICAgICAvL3RleHRhcmVhLmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICB0ZXh0YXJlYS52YWwoZWRpdG9yLmdldFNlc3Npb24oKS5nZXRWYWx1ZSgpKTtcbiAgICAgICAgLy99KTtcblxuXG5cbiAgICAgICAgdmFyIHByZXZpZXdCdXR0b24gPSBFeHQuZ2V0KCdwcmV2aWV3LWJ1dHRvbicpO1xuICAgICAgICB2YXIgcHJldmlldyA9IEV4dC5nZXQoJ3ByZXZpZXctbWQnKTtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBFeHQuZ2V0KCdjb250ZW50LW1kJyk7XG5cbiAgICAgICAgcHJldmlld0J1dHRvbi5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoYSxiLGMsZCkge1xuICAgICAgICAgICAgaWYgKHByZXZpZXcuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3LmhpZGUoKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LnNob3coKTtcblxuICAgICAgICAgICAgICAgIHByZXZpZXdCdXR0b24uY2hpbGQoJ2knKS5yZW1vdmVDbGFzcygnaWNvbi10b2dnbGUtb24nKTtcbiAgICAgICAgICAgICAgICBwcmV2aWV3QnV0dG9uLmNoaWxkKCdpJykuYWRkQ2xhc3MoJ2ljb24tdG9nZ2xlLW9mZicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3LnNob3coKTtcbiAgICAgICAgICAgICAgICBjb250ZW50LmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIHByZXZpZXdCdXR0b24uY2hpbGQoJ2knKS5yZW1vdmVDbGFzcygnaWNvbi10b2dnbGUtb2ZmJyk7XG4gICAgICAgICAgICAgICAgcHJldmlld0J1dHRvbi5jaGlsZCgnaScpLmFkZENsYXNzKCdpY29uLXRvZ2dsZS1vbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwcmV2aWV3LnVwZGF0ZShtYXJrZWQodGhpcy5lZGl0b3IuZ2V0VmFsdWUoKSkpO1xuICAgICAgICB0aGlzLmVkaXRvci5nZXRTZXNzaW9uKCkub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBwcmV2aWV3LnVwZGF0ZShtYXJrZWQobWRlLmVkaXRvci5nZXRWYWx1ZSgpKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuTWFya2Rvd25FZGl0b3IgPSBuZXcgTWFya2Rvd25FZGl0b3IoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=