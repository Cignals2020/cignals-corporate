const LOCAL_DATA = JSON.parse(new TextDecoder().decode(Uint8Array.from(atob('eyJkYXRhL3Byb2plY3RzLmpzb24iOiBbeyJpZCI6ICIyMDI0LXBhaW50LXRoZS1jaXR5IiwgInRpdGxlIjogIlBhaW50IFRoZSBDaXR5IiwgInN1YnRpdGxlIjogIuOCt+ODo+ODg+OCv+ODvOOCouODvOODiCIsICJ5ZWFyIjogIjIwMjQiLCAiY2F0ZWdvcnkiOiAiUHVibGljIEFydCAvIFNodXR0ZXIgQXJ0IiwgImNsaWVudCI6ICJQYWludCBUaGUgQ2l0eSIsICJsb2NhdGlvbiI6ICJPa2luYXdhIC8gS296YSIsICJkZXNjcmlwdGlvbiI6ICLooZfjga7jgrfjg6Pjg4Pjgr/jg7zjgpLjgq3jg6Pjg7Pjg5DjgrnjgavlpInjgYjjgIHml6XluLjjga7poqjmma/jgavmlrDjgZfjgYTooajmg4XjgpLnlJ/jgb/lh7rjgZnjgqLjg7zjg4jjg5fjg63jgrjjgqfjgq/jg4jjgILlnLDln5/jga7oppbnt5rjgYzpm4bjgb7jgovloLTmiYDjgavjgIHoqJjmhrbjgavmrovjgovjg5Pjgrjjg6XjgqLjg6vmjqXngrnjgpLoqK3oqIjjgZfjgb7jgZfjgZ/jgIIiLCAic3VtbWFyeSI6ICLooZfjga7kvZnnmb3jgpLjgIHmlofljJbjga7lhaXlj6PjgbjlpInjgYjjgovjgrfjg6Pjg4Pjgr/jg7zjgqLjg7zjg4jjgIIiLCAic2VydmljZXMiOiBbIkFydCBEaXJlY3Rpb24iLCAiQ3JlYXRpdmUgQ29vcmRpbmF0aW9uIiwgIkRvY3VtZW50YXRpb24iXSwgIm1haW5JbWFnZSI6ICJpbWFnZXMvcHJvamVjdHMvMjAyNC1wYWludC10aGUtY2l0eS9waG90b3MvMDEtaW1nLTg5NzAuanBlZyIsICJnYWxsZXJ5IjogWyJpbWFnZXMvcHJvamVjdHMvMjAyNC1wYWludC10aGUtY2l0eS9waG90b3MvMDEtaW1nLTg5NzAuanBlZyIsICJpbWFnZXMvcHJvamVjdHMvMjAyNC1wYWludC10aGUtY2l0eS9waG90b3MvMDItaW1nLTk2NjUuanBlZyIsICJpbWFnZXMvcHJvamVjdHMvMjAyNC1wYWludC10aGUtY2l0eS9kZXNpZ25zLzAxLXBhaW50LXRoZS1jaXR5MjAyNC5qcGciXSwgImV4dGVybmFsVXJsIjogIiIsICJzdGF0dXMiOiAicHVibGlzaGVkIiwgIm5lZWRzQXNzZXRzIjogZmFsc2V9LCB7ImlkIjogIjIwMjUtcGFsbXlyYS1uaWdodC1tYXJrZXQiLCAidGl0bGUiOiAi44OR44Or44Of44Op5aSc5biCIiwgInN1YnRpdGxlIjogIuWcsOWfn+OBqOS6uuOBjOa3t+OBluOCi+ODiuOCpOODiOODnuODvOOCseODg+ODiCIsICJ5ZWFyIjogIjIwMjUiLCAiY2F0ZWdvcnkiOiAiRXZlbnQgUHJvZHVjZSAvIENvbW11bml0eSBEZXNpZ24iLCAiY2xpZW50IjogIlBhbG15cmEgTmlnaHQgTWFya2V0IiwgImxvY2F0aW9uIjogIk9raW5hd2EgLyBLb3phIiwgImRlc2NyaXB0aW9uIjogIuWknOOBruihl+OBq+S6uuOBrua1geOCjOOBqOS8muipseOCkueUn+OBv+WHuuOBmeODreODvOOCq+ODq+ODnuODvOOCseODg+ODiOOAguWHuuW6l+iAheOAgeadpeWgtOiAheOAgeWcsOWfn+OBruepuuawl+OCkuOBpOOBquOBjuOAgeOBn+OBoOOBruWCrOS6i+OBp+OBr+OBquOBj+ihl+OBruiomOaGtuOBq+aui+OCi+S9k+mok+OBqOOBl+OBpue3qOmbhuOBl+OBvuOBl+OBn+OAgiIsICJzdW1tYXJ5IjogIuWcsOWfn+OBrueGsemHj+OCkuWknOOBruODnuODvOOCseODg+ODiOOBqOOBl+OBpueri+OBoeS4iuOBkuOCi+OAgiIsICJzZXJ2aWNlcyI6IFsiQ3JlYXRpdmUgRGlyZWN0aW9uIiwgIkV2ZW50IFBsYW5uaW5nIiwgIkRlc2lnbiIsICJDb21tdW5pdHkgRGVzaWduIl0sICJtYWluSW1hZ2UiOiAiaW1hZ2VzL3Byb2plY3RzLzIwMjUtcGFsbXlyYS1uaWdodC1tYXJrZXQtMjAyNS9kZXNpZ25zLzAxLXBhbG15cmEtbmlnaHQtbWFya2V0LXBvc3Rlci1hMy10dC1vbW90ZS1vbC5wbmciLCAiZ2FsbGVyeSI6IFsiaW1hZ2VzL3Byb2plY3RzLzIwMjUtcGFsbXlyYS1uaWdodC1tYXJrZXQtMjAyNS9kZXNpZ25zLzAxLXBhbG15cmEtbmlnaHQtbWFya2V0LXBvc3Rlci1hMy10dC1vbW90ZS1vbC5wbmciXSwgImV4dGVybmFsVXJsIjogIiIsICJzdGF0dXMiOiAiZHJhZnQiLCAibmVlZHNBc3NldHMiOiBmYWxzZX0sIHsiaWQiOiAiMjAyNS1rb3phcm9ja3MiLCAidGl0bGUiOiAiS09aQVJPQ0tTIiwgInN1YnRpdGxlIjogIuOCs+OCtuOBruihl+OCkuW3u+OBjei+vOOCgOmfs+alveODu+OCq+ODq+ODgeODo+ODvOODl+ODreOCuOOCp+OCr+ODiCIsICJ5ZWFyIjogIjIwMjUiLCAiY2F0ZWdvcnkiOiAiRmVzdGl2YWwgLyBCcmFuZGluZyAvIFByb2R1Y2UiLCAiY2xpZW50IjogIktPWkFST0NLUyIsICJsb2NhdGlvbiI6ICJPa2luYXdhIC8gS296YSIsICJkZXNjcmlwdGlvbiI6ICLkvIHnlLvjgIHjg4fjgrbjgqTjg7PjgIFTTlPjgq/jg6rjgqjjgqTjg4bjgqPjg5bjgIHnj77loLTjg4fjgqPjg6zjgq/jgrfjg6fjg7Pjgb7jgafmqKrmlq3jgZfjgIHjgrPjgrbjga7nhrHph4/jgpLlj6/oppbljJbjgZfjgZ/jg5fjg63jgrjjgqfjgq/jg4jjgILooZfjg7vpn7Pmpb3jg7vkurrjgpLjgaTjgarjgZDlsI7nt5rjgpLoqK3oqIjjgZfjgb7jgZfjgZ/jgIIiLCAic3VtbWFyeSI6ICLjgrPjgrbjga7nhrHph4/jgpLjgIHpn7Pmpb3jgajooZfjga7kvZPpqJPjgajjgZfjgablsYrjgZHjgovjgIIiLCAic2VydmljZXMiOiBbIkNyZWF0aXZlIERpcmVjdGlvbiIsICJQcm9qZWN0IERlc2lnbiIsICJFdmVudCBQbGFubmluZyIsICJCcmFuZGluZyIsICJTTlMgQ3JlYXRpdmUiLCAiRmlsbSBQcm9kdWN0aW9uIl0sICJtYWluSW1hZ2UiOiAiaW1hZ2VzL3Byb2plY3RzLzIwMjUta296YXJvY2tzLTIwMjUvcGhvdG9zLzAxLWRzYy02MzE3LmpwZyIsICJnYWxsZXJ5IjogWyJpbWFnZXMvcHJvamVjdHMvMjAyNS1rb3phcm9ja3MtMjAyNS9waG90b3MvMDEtZHNjLTYzMTcuanBnIiwgImltYWdlcy9wcm9qZWN0cy8yMDI1LWtvemFyb2Nrcy0yMDI1L3Bob3Rvcy8wMi1pbWctMjQxNC5qcGciLCAiaW1hZ2VzL3Byb2plY3RzLzIwMjUta296YXJvY2tzLTIwMjUvcGhvdG9zLzAzLXB4bC0yMDI1MDcxMi0wMjUyNTQ1MjUtbXAuanBnIiwgImltYWdlcy9wcm9qZWN0cy8yMDI1LWtvemFyb2Nrcy0yMDI1L3Bob3Rvcy8wNC1weGwtMjAyNTA3MTItMTAxMzQ0OTA4LW1wLmpwZyIsICJpbWFnZXMvcHJvamVjdHMvMjAyNS1rb3phcm9ja3MtMjAyNS9kZXNpZ25zLzAxLTA0LWJhbmFyLXJnYi5wbmciXSwgImV4dGVybmFsVXJsIjogIiIsICJzdGF0dXMiOiAicHVibGlzaGVkIiwgIm5lZWRzQXNzZXRzIjogZmFsc2V9LCB7ImlkIjogIjIwMjYtd29ya3Byb29mZmljZS1yZW5ld2FsIiwgInRpdGxlIjogIndvcmtwcm9vZmZpY2Ug44K144Kk44OI44Oq44OL44Ol44O844Ki44OrIiwgInN1YnRpdGxlIjogIuazleS6uuWQkeOBkVdlYuODquODi+ODpeODvOOCouODqyIsICJ5ZWFyIjogIjIwMjYiLCAiY2F0ZWdvcnkiOiAiV2ViIFJlbmV3YWwgLyBDb3Jwb3JhdGUgU2l0ZSIsICJjbGllbnQiOiAid29ya3Byb29mZmljZSIsICJsb2NhdGlvbiI6ICJPbmxpbmUiLCAiZGVzY3JpcHRpb24iOiAi5rOV5Lq65ZCR44GR44K144O844OT44K544Gu5L+h6aC85oSf44Go5ZWP44GE5ZCI44KP44Gb5bCO57ea44KS5pW055CG44GZ44KLV2Vi44Oq44OL44Ol44O844Ki44Or5qGI5Lu244CC5LqL5qWt5YaF5a6544Gu5Lyd44KP44KK44KE44GZ44GV44CBQ1bjg53jgqTjg7Pjg4jjgIHkv53lrojjgZfjgoTjgZnjgYTmg4XloLHoqK3oqIjjgpLph43oppbjgZfjgZ/ku67lrp/nuL7jgajjgZfjgabmjrLovInjgZfjgabjgYTjgb7jgZnjgIIiLCAic3VtbWFyeSI6ICLkv6HpoLzmhJ/jgahDVuWwjue3muOCkuaVtOOBiOOCi+OAgeazleS6uuOCteOCpOODiOOBruWGjeioreioiOOAgiIsICJzZXJ2aWNlcyI6IFsiV2ViIERpcmVjdGlvbiIsICJJbmZvcm1hdGlvbiBBcmNoaXRlY3R1cmUiLCAiVUkgRGVzaWduIiwgIkZyb250ZW5kIl0sICJtYWluSW1hZ2UiOiAiIiwgImdhbGxlcnkiOiBbXSwgImV4dGVybmFsVXJsIjogImh0dHBzOi8vd29ya3Byby1vZmZpY2UuY29tLyIsICJzdGF0dXMiOiAiZHJhZnQiLCAibmVlZHNBc3NldHMiOiB0cnVlfV0sICJkYXRhL2pvdXJuYWwuanNvbiI6IFt7ImlkIjogIjIwMjYtd2h5LXdlLWFyZS1ub3QtYW4tZXZlbnQtY29tcGFueSIsICJ0aXRsZSI6ICLnp4HjgZ/jgaHjgYzjgqTjg5njg7Pjg4jkvJrnpL7jgafjga/jgarjgYTnkIbnlLEiLCAieWVhciI6ICIyMDI2IiwgInR5cGUiOiAiam91cm5hbCIsICJzdGF0dXMiOiAicHVibGlzaGVkIiwgImV4Y2VycHQiOiAiQ2lnbmFsc+OBr+OCpOODmeODs+ODiOOCkuS9nOOCi+S8muekvuOBp+OBr+OBguOCiuOBvuOBm+OCk+OAguODl+ODreOCuOOCp+OCr+ODiOOCkuaIkOWKn+OBleOBm+OCi+S8muekvuOBp+OBmeOAguOBk+OBruS4gOaWh+OBq+i+vOOCgeOBn+S6i+alreOBruiAg+OBiOaWueOCkuOAgeWcsOWfn+OBp+S8tOi1sOOBl+OBpuOBjeOBn+Wun+aEn+OBqOOBqOOCguOBq+abuOOBjeaui+OBl+OBvuOBmeOAgiIsICJib2R5IjogIuOAjOOCpOODmeODs+ODiOOCkuOBiumhmOOBhOOBl+OBn+OBhOOAjeKAlOKAlOOBneOBhuWjsOOCkuOBi+OBkeOBpuOBhOOBn+OBoOOBj+OBk+OBqOOBjOOCiOOBj+OBguOCiuOBvuOBmeOAguOBqOOBpuOCguWsieOBl+OBhOOBk+OBqOOBp+OBmeOBjOOAgeengeOBn+OBoeOBr+OBhOOBpOOCguOAgeOBk+OBhuOBiui/lOOBl+OBl+OBpuOBhOOBvuOBmeOAguOAjOOBneOBruOCpOODmeODs+ODiOOBp+OAgeS9leOCkuaIkOWKn+OBleOBm+OBn+OBhOOBp+OBmeOBi++8n+OAjVxuXG7jgqTjg5njg7Pjg4jjgoLjgIHjg4fjgrbjgqTjg7PjgoLjgIHmmKDlg4/jgoLjgIFTTlPjgoLjgIHnp4HjgZ/jgaHjgavjgajjgaPjgabjga/llYblk4Hjgafjga/jgYLjgorjgb7jgZvjgpPjgILjgZnjgbnjgabjga/jgIHlnLDln5/jga7jg5fjg63jgrjjgqfjgq/jg4jjgpLmiJDlip/jgZXjgZvjgovjgZ/jgoHjga7miYvmrrXjgafjgZnjgILlpKfliIfjgarjga7jga/miJDmnpznianjgafjga/jgarjgY/jgIHjgZ3jga7lhYjjgavnlJ/jgb7jgozjgovmiJDmnpzjgILpm4blrqLjgarjga7jgYvjgIHoqo3nn6Xjgarjga7jgYvjgIHkuovmpa3jgajjgZfjgabjga7ntpnntprjgarjga7jgYvjgILnm67nmoTjgYzlrprjgb7jgonjgarjgYTjgb7jgb7miYvmrrXjgaDjgZHjgpLkvZzjgaPjgabjgoLjgIHkuIDluqbjgY3jgorjga7miZPjgaHkuIrjgZLoirHngavjgafntYLjgo/jgaPjgabjgZfjgb7jgYTjgb7jgZnjgIJcblxu44Kz44K244Go44GE44GG6KGX44Gn5rS75YuV44GX44Gm44GE44KL44Go44CB44CM6Z2i55m944GE44GT44Go44KS44KE44KK44Gf44GE44CN44Go44GE44GG54ax6YeP44KS5oyB44Gj44Gf5Lq644KE5LyB5qWt44Gr44CB44Gf44GP44GV44KT5Ye65Lya44GE44G+44GZ44CC44Gd44Gu54ax6YeP44KS44CB5LiA6YGO5oCn44Gu44Kk44OZ44Oz44OI44Gn44Gv44Gq44GP44CB57aa44GE44Gm44GE44GP5LqL5qWt44KE5paH5YyW44Gr44G+44Gn6IKy44Gm44KL44GT44Go44CC5LyB55S744Gu5YWl44KK5Y+j44GL44KJ5Lim6LWw44GX44CB5pmC44Gr44Kv44Oq44Ko44Kk44OG44Kj44OW44KS44CB5pmC44Gr5aC05omA44KS44CB5pmC44Gr5Lq644Gu44Gk44Gq44GM44KK44KS5beu44GX5Ye644GX44Gq44GM44KJ44CB44OX44Ot44K444Kn44Kv44OI44Gd44Gu44KC44Gu44Gu5oiQ5Yqf44Gr6LKs5Lu744KS5oyB44Gk44GT44Go44CC44Gd44KM44GM56eB44Gf44Gh44Gu5LuV5LqL44Gu5a6a576p44Gn44GZ44CCXG5cbuOBoOOBi+OCiUNpZ25hbHPjga/jgIHjgqTjg5njg7Pjg4jkvJrnpL7jgafjgoLliLbkvZzkvJrnpL7jgafjgoLjgarjgY/jgIHjgIzjg5fjg63jgrjjgqfjgq/jg4jjgpLmiJDlip/jgZXjgZvjgovkvJrnpL7jgI3jgaDjgajoqIDjgYTliIfjgaPjgabjgYTjgb7jgZnjgILjgoLjgZfku4rjgIHlvaLjgavjgarjgaPjgabjgYTjgarjgYTooZ3li5XjgoTjgIHjgoTjgaPjgabjgb/jgZ/jgYTmsJfmjIHjgaHjgpLmirHjgYjjgabjgYTjgovjgarjgonjgIHjgZ3jga7mrrXpmo7jgafjgZPjgZ3oqbHjgpLogZ7jgYvjgZvjgabjgY/jgaDjgZXjgYTjgILlrozmiJDjgZXjgozjgZ/kvIHnlLvmm7jjga/opoHjgorjgb7jgZvjgpPjgIIiLCAibWFpbkltYWdlIjogImltYWdlcy9wcm9qZWN0cy8yMDI1LWtvemFyb2Nrcy0yMDI1L3Bob3Rvcy8wMS1kc2MtNjMxNy5qcGciLCAiZ2FsbGVyeSI6IFtdLCAidGFncyI6IFsiUHJvZHVjZSIsICLlnLDln5/jg5fjg63jgrjjgqfjgq/jg4giLCAiQ2lnbmFsc+OBruiAg+OBiOaWuSJdLCAicHVibGlzaGVkQXQiOiAiMjAyNi0wNi0yMCIsICJjcmVkaXRzIjoge319LCB7ImlkIjogIjIwMjYtb2tpbmF3YS1jb3Jwb3JhdGUtdHJhaW5pbmcta296YSIsICJ0aXRsZSI6ICLmspbnuITjgafkvIHmpa3noJTkv67jgpLjgZnjgovjgarjgonjgIHooZfjgZ3jga7jgoLjga7jgpLmlZnmnZDjgasiLCAieWVhciI6ICIyMDI2IiwgInR5cGUiOiAiam91cm5hbCIsICJzdGF0dXMiOiAicHVibGlzaGVkIiwgImV4Y2VycHQiOiAi44Oq44K+44O844OI44Gu5Lya6K2w5a6k44Gn5a6M57WQ44GZ44KL56CU5L+u44Gn44Gv44Gq44GP44CB44Kz44K244Gu6KGX44KS5q2p44GN44CB5Zyw5Z+f44Gu5Lq644Go5Ye65Lya44GE44CB5omL44KS5YuV44GL44GZ44CCS09aQSBCQVNFQ0FNUOOBqEFyY2FkZSBSZXNvcnQgT2tpbmF3YeOCkui1t+eCueOBq+OBl+OBn+OAgeaylue4hOOBquOCieOBp+OBr+OBruS8gealreeglOS/ruODu+WQiOWuv+OBruioreioiOaAneaDs+OAgiIsICJib2R5IjogIuaylue4hOOBp+S8gealreeglOS/ruOChOWQiOWuv+OCkuaknOiojuOBmeOCi+OBqOOBjeOAgeWkmuOBj+OBrumBuOaKnuiCouOBr+ODquOCvuODvOODiOODm+ODhuODq+OBruS8muitsOWupOOBq+ihjOOBjeedgOOBjeOBvuOBmeOAguOCguOBoeOCjeOCk+W/q+mBqeOBp+OBmeOAguOBkeOCjOOBqeOAgeOBm+OBo+OBi+OBj+aylue4hOOBvuOBp+adpeOBpuOAgeS8muitsOWupOOBrueZveOBhOWjgeOBoOOBkeOCkuimi+OBpuW4sOOCi+OBruOBr+OAgeWwkeOBl+OCguOBo+OBn+OBhOOBquOBhOOAglxuXG5DaWduYWxz44GM5o+Q5qGI44GZ44KL44Gu44Gv44CB44Kz44K244Gu6KGX44Gd44Gu44KC44Gu44KS5pWZ5p2Q44Gr44GZ44KL56CU5L+u44Gn44GZ44CC5oug54K544Gr44Gq44KL44Gu44Gv44CB44Kv44Oq44Ko44Kk44K/44O844KE44OV44Oq44O844Op44Oz44K544GM6ZuG44G+44KL44Kz44Ov44O844Kt44Oz44Kw77yG5Ym15L2c44K544K/44K444Kq44CMS09aQSBCQVNFQ0FNUOOAjeOBqOOAgeOCs+OCtuS4gOeVquihl+OBruODm+OCueODhuODq+OAjEFyY2FkZSBSZXNvcnQgT2tpbmF3YeOAjeOAguaXpeS4reOBr+ihl+OCkuatqeOBjeOAgeODleOCo+ODvOODq+ODieODr+ODvOOCr+OBp+WVj+OBhOOCkumbhuOCgeOAgeWknOOBr0JBU0VDQU1Q44Gn6KiA6JGJ44KE5LyB55S744G444Go57eo6ZuG44GX44Gm44GE44GP44CC55Ww44Gq44KL44K444Oj44Oz44Or44Gu5Lq644GM5Lqk44KP44KL5aC05omA44Gg44GL44KJ44GT44Gd44CB5pmu5q6144Gu44Kq44OV44Kj44K544Gn44Gv5Ye644Gm44GT44Gq44GE55m65oOz44GM55Sf44G+44KM44G+44GZ44CCXG5cbuOBk+OBhuOBl+OBn+S9k+mok+Wei+OBrueglOS/ruOBr+OAgee1jOWWtuODgeODvOODoOOChOaWsOimj+S6i+alreODgeODvOODoOOBruimluW6p+OCkuWkieOBiOOBn+OBhOOBqOOBjeOAgeiLpeaJi+OCkuaWsOOBl+OBhOeSsOWig+OBp+WIuua/gOOBl+OBn+OBhOOBqOOBjeOAgeOBneOBl+OBpuWcsOWfn+izh+a6kOOCkuS9v+OBo+OBn+eglOS/ruOCkuWun+aWveOBl+OBn+OBhOecjOWkluS8gealreOBq+OBqOOBo+OBpuOAgeeJueOBq+ebuOaAp+OBjOiJr+OBhOOCguOBruOBp+OBmeOAgueglOS/ruOBruioreioiOOBi+OCieOAgeODleOCoeOCt+ODquODhuODvOOCt+ODp+ODs+OAgeiomOmMsuOAgeOBneOBruW+jOOBruaIkOaenOeJqeWMluOBvuOBp+OAgUNpZ25hbHPjgYzkuIDmsJfpgJrosqvjgafkvLTotbDjgZfjgb7jgZnjgIJcblxu5rKW57iE44Gu5Yqp5oiQ6YeR44KS5rS755So44GX44Gf5a6f5pa944Gu44GU55u46KuH44KC5om/44Gj44Gm44GE44G+44GZ44CC44CM44G+44Gg5YaF5a6544Gv5Zu644G+44Gj44Gm44GE44Gq44GE44GR44KM44Gp44CB5rKW57iE44Gn5L2V44GL5LuV5o6b44GR44Gf44GE44CN4oCU4oCU44Gd44Gu5q616ZqO44GL44KJ44GU5LiA57eS44Gn44GN44G+44GZ44CC56CU5L+u44Gu6Kmz57Sw44Gv5bCC55So44Oa44O844K444Gn44GU5qGI5YaF44GX44Gm44GE44G+44GZ44CCIiwgIm1haW5JbWFnZSI6ICJpbWFnZXMvcHJvamVjdHMvam91cm5hbC0yMDI2LW9uZS1uaWdodC1tYWtlbG92ZS12b2wyL3Bob3Rvcy8wMS1pbnN0YWdyYW0tcG9zdC03LmpwZyIsICJnYWxsZXJ5IjogW10sICJ0YWdzIjogWyLkvIHmpa3noJTkv64iLCAi5ZCI5a6/IiwgIktPWkEgQkFTRUNBTVAiLCAi5rKW57iEIl0sICJwdWJsaXNoZWRBdCI6ICIyMDI2LTA1LTE1IiwgImNyZWRpdHMiOiB7fX0sIHsiaWQiOiAiMjAyNi1rb3phLWJhc2VjYW1wLW9uZS15ZWFyIiwgInRpdGxlIjogIktPWkEgQkFTRUNBTVDjga4x5bm044CC5aC05omA44KS5oyB44Gk44Go44GE44GG44GT44GoIiwgInllYXIiOiAiMjAyNiIsICJ0eXBlIjogImpvdXJuYWwiLCAic3RhdHVzIjogInB1Ymxpc2hlZCIsICJleGNlcnB0IjogIjIwMjXlubTmmKXjgavplovjgYTjgZ/jgrPjgrbjga7jgrPjg5/jg6Xjg4vjg4bjgqPjgrnjg5rjg7zjgrlLT1pBIEJBU0VDQU1Q44CC44Kq44O844OX44Oz5b2T5Yid44Gv5oCd44Gj44Gf44G744Gp44Gu5Y+N6Z+/44GM44Gq44GL44Gj44Gf5aC05omA44GM44CB44Gp44GG44KE44Gj44Gm5Lq644Go44OX44Ot44K444Kn44Kv44OI44GM6ZuG44G+44KL5oug54K544Gr44Gq44Gj44Gm44GE44Gj44Gf44Gu44GL44CCMeW5tOmWk+OBruiomOmMsuOAgiIsICJib2R5IjogIjIwMjXlubTjga7mmKXjgIHmspbnuITluILjgrPjgrbjga7kuIDnlarooZfjgavjgIxLT1pBIEJBU0VDQU1Q44CN44KS6ZaL44GN44G+44GX44Gf44CC44Kv44Oq44Ko44Kk44K/44O844KE6LW35qWt5a6244GM44CB5Ym15L2c44KE44OX44Ot44K444Kn44Kv44OI44Gu55u46KuH44GM44Gn44GN44KL5aC05omA44CCMumajuOBr+OCq+ODleOCp++8huODkOODvOOBqOOCruODo+ODqeODquODvOOAgTPpmo7jga/jg6/jg7zjgq/jgrnjg5rjg7zjgrnjgajjg6zjgrPjg7zjg4fjgqPjg7PjgrDjg5bjg7zjgrnjgILnkIbmg7Pjga/jgZ/jgY/jgZXjgpPjgYLjgorjgb7jgZfjgZ/jgIJcblxu5q2j55u044Gr5pu444GP44Go44CB44Kq44O844OX44Oz5b2T5Yid44Gv5oCd44Gj44Gf44G744Gp44Gu5Y+N6Z+/44GM44GC44KK44G+44Gb44KT44Gn44GX44Gf44CC44Kz44K244Gr44Gv44KC44Go44KC44Go44Kv44Oq44Ko44Kk44K/44O85ZCR44GR44Gu44KC44Gu44Gl44GP44KK5oug54K544GM5bCR44Gq44GP44CB44Kz44Ov44O844Kt44Oz44Kw44Go44GE44GG6KiA6JGJ44KC44CM44Gf44Gg44Gu44K344Kn44Ki44Kq44OV44Kj44K544CN44Go44GX44Gm5Y+X44GR5Y+W44KJ44KM44GM44Gh44Gn44GX44Gf44CC5Yip55So6ICF44Go5LiA57eS44Gr44OX44Ot44K444Kn44Kv44OI44KS56uL44Gh5LiK44GS44KJ44KM44KL56m66ZaT44KS44Gk44GP44KL44Gu44Gv44CB5oOz5YOP44KI44KK44Ga44Gj44Go6Zuj44GX44GE44GT44Go44Gn44GX44Gf44CCXG5cbuWkieOCj+OBo+OBpuOBhOOBo+OBn+OBjeOBo+OBi+OBkeOBr+OAgeWgtOaJgOOCkuOAjOiyuOOBmeOAjeOBruOBp+OBr+OBquOBj+OAjOS4gOe3kuOBq+S9v+OBhuOAjeOBq+aMr+OCiuWIh+OBo+OBn+OBk+OBqOOBp+OBmeOAguODkeODq+ODn+ODqeWknOW4guOAgVBhaW50IFRoZSBDaXR544CBT05FIE5JR0hUIE1BS0UgTE9WReOBruOCiOOBhuOBquOAgeihl+OBqOS6uuOBjOS6pOOCj+OCi+S8geeUu+OCkkJBU0VDQU1Q55m644Gn5LuV5o6b44GR44Gm44GE44GP44GG44Gh44Gr44CB5bCR44GX44Ga44Gk5Lq644GM6ZuG44G+44KK44CB5LyB5qWt44GL44KJ44Gu56CU5L+u44KE44Kk44OZ44Oz44OI44Gu55u46KuH44KC5YWl44KL44KI44GG44Gr44Gq44KK44G+44GX44Gf44CCXG5cbuWgtOaJgOOCkuaMgeOBpOOBk+OBqOOBr+OAgeWbuuWumuiyu+OBqOOBhOOBhuODquOCueOCr+OCkuiDjOiyoOOBhuOBk+OBqOOBp+OCguOBguOCiuOBvuOBmeOAguOBneOCjOOBp+OCguOAgeaLm+OBkeOCi+WgtOaJgOOBjOOBguOCi+OBi+OCieOBk+OBneeUn+OBvuOCjOOCi+mWouS/guaAp+OBjOOBguOCiuOBvuOBmeOAguOAjOOBvuOBmkJBU0VDQU1Q44Gr5p2l44Gm44GP44Gg44GV44GE44CN44Go6KiA44GI44KL44CC44GT44Gu5LiA6KiA44Gu5by344GV44KS44CBMeW5tOOBi+OBkeOBpuWun+aEn+OBl+OBpuOBhOOBvuOBmeOAguimi+WtpuOBr+OBhOOBpOOBp+OCguatk+i/juOBp+OBmeOAguOCs+OCtuOBq+adpeOCi+eUqOS6i+OBjOOBguOCjOOBsOOAgeOBnOOBsueri+OBoeWvhOOBo+OBpuOBj+OBoOOBleOBhOOAgiIsICJtYWluSW1hZ2UiOiAiaW1hZ2VzL3Byb2plY3RzLzIwMjQtcGFpbnQtdGhlLWNpdHkvcGhvdG9zLzAxLWltZy04OTcwLmpwZWciLCAiZ2FsbGVyeSI6IFtdLCAidGFncyI6IFsiS09aQSBCQVNFQ0FNUCIsICLjgrPjg5/jg6Xjg4vjg4bjgqMiLCAi44Kz44K2IiwgIuWgtOOBpeOBj+OCiiJdLCAicHVibGlzaGVkQXQiOiAiMjAyNi0wNC0yNSIsICJjcmVkaXRzIjoge319LCB7ImlkIjogIjIwMjYtb25lLW5pZ2h0LW1ha2UtbG92ZS12b2wyIiwgInRpdGxlIjogIk9ORSBOSUdIVCBNQUtFIExPVkUgdm9sLjIiLCAieWVhciI6ICIyMDI2IiwgInR5cGUiOiAiam91cm5hbCIsICJzdGF0dXMiOiAicHVibGlzaGVkIiwgImV4Y2VycHQiOiAiQXJjYWRlIFJlc29ydCBPa2luYXdh44Gr5LiA5rOK44GX44CBS09aQSBCQVNFQ0FNUOOBruOCueOCv+OCuOOCquOBp+S4gOabsuOCkuS9nOOCiuS4iuOBkuOCi+S8geeUu+esrOS6jOW8vuOAguOCs+OCtuOBruihl+OBruepuuawl+aEn+OBruS4reOBp+eUn+OBvuOCjOOBn+ODquOCouODq+OBquOCu+ODg+OCt+ODp+ODs+OBruiomOmMsuOAgiIsICJib2R5IjogIuOCs+OCtuS4gOeVquihl+WGheOBq+OBguOCi+ODm+OCueODhuODq+OAgUFyY2FkZSBSZXNvcnQgT2tpbmF3Ye+8iEBhcmNhZGVyZXNvcnRva2luYXdhX2Fyb1/vvInjgavkuIDms4rjgZfjgabjgIFLT1pBIEJBU0VDQU1Q77yIQGtvemFfYmFzZWNhbXDvvInjga7jgrnjgr/jgrjjgqrjgacx5puy44KS5L2c44KK5LiK44GS44KL44Go44GE44GG5LyB55S744CMT05FIE5JR0hUIE1BS0UgTE9WReOAjeOAguOBneOBruesrOS6jOW8vuOCkuiomOmMsuOBl+OBn0pPVVJOQUzjgafjgZnjgIJcblxu56ys5LqM5by+44Gu44Ky44K544OI44Gr44Gv44CBQmVhdG1ha2Vy44GuQmF6enJvYXLmsI/vvIhAYmF6enJvYXLvvInjgYzlj4LliqDjgILjgZ3jga7jg5Pjg7zjg4jjgavkuZfjgovjga7jga/jgIFTTElNIEJPWeawj++8iEBmc2xpbWtu77yJ44GoTEFaWuawj++8iEBkb2RnZXJ6el/vvInjgILjgrPjgrbjga7ooZfjga7nqbrmsJfmhJ/jga7kuK3jgafjgIEx5rOKMuaXpeOBqOOBhOOBhumZkOOCieOCjOOBn+aZgumWk+OBp+WItuS9nOOBleOCjOOBn+S4gOabsuOBr+OAgeOBk+OBruWgtOaJgOOBoOOBi+OCieOBk+OBneeUn+OBvuOCjOOBn+ODquOCouODq+OBquOCu+ODg+OCt+ODp+ODs+OBq+OBquOCiuOBvuOBl+OBn+OAglxuXG7lkITnpL7phY3kv6Hjg6rjg6rjg7zjgrnjga8yMDI25bm0MDTmnIgwN+aXpeOAgkJlYXQgYnkgQGJhenpyb2Fy44CBUmFwIGJ5IEBmc2xpbWtuICYgQGRvZGdlcnp6X+OAglBvd2VyZWQgYnkgQGNpZ25hbHNfanDjgILkvIHnlLvjg7vmp4vmiJDjga8gQGtvemFfYmFzZWNhbXAg44GoIEB5dWtiX2ZlZWxib21i44CBRGlyZWN0b3Ljga9ZdWtpIE1vdG9tdXJh77yIRkVFTEJPTULvvInjgIFEZXNpZ27jga9NRURBTUFZQUtJ77yIQHN1bm55X19zaWRlX191cHBlcu+8ieOBjOaLheW9k+OBl+OBpuOBhOOBvuOBmeOAgiIsICJtYWluSW1hZ2UiOiAiaW1hZ2VzL3Byb2plY3RzL2pvdXJuYWwtMjAyNi1vbmUtbmlnaHQtbWFrZWxvdmUtdm9sMi9waG90b3MvMDEtaW5zdGFncmFtLXBvc3QtNy5qcGciLCAiZ2FsbGVyeSI6IFsiaW1hZ2VzL3Byb2plY3RzL2pvdXJuYWwtMjAyNi1vbmUtbmlnaHQtbWFrZWxvdmUtdm9sMi9waG90b3MvMDEtaW5zdGFncmFtLXBvc3QtNy5qcGciLCAiaW1hZ2VzL3Byb2plY3RzL2pvdXJuYWwtMjAyNi1vbmUtbmlnaHQtbWFrZWxvdmUtdm9sMi9waG90b3MvMDItaW5zdGFncmFtLXBvc3QtOS5qcGciXSwgInRhZ3MiOiBbIk11c2ljIiwgIktPWkEgQkFTRUNBTVAiLCAiQXJjYWRlIFJlc29ydCBPa2luYXdhIiwgIlNlc3Npb24iXSwgInB1Ymxpc2hlZEF0IjogIjIwMjYtMDQtMDciLCAiY3JlZGl0cyI6IHsiYmVhdCI6ICJCYXp6cm9hciIsICJyYXAiOiAiU0xJTSBCT1kgJiBMQVpaIiwgInBvd2VyZWRCeSI6ICJDaWduYWxzIiwgInBsYW5uaW5nIjogIktPWkEgQkFTRUNBTVAgLyBZdWtpIE1vdG9tdXJhIiwgImRpcmVjdG9yIjogIll1a2kgTW90b211cmHvvIhGRUVMQk9NQu+8iSIsICJkZXNpZ24iOiAiTUVEQU1BWUFLSSJ9fSwgeyJpZCI6ICIyMDI2LXBhaW50LXRoZS1jaXR5LW5vdGUiLCAidGl0bGUiOiAiUGFpbnQgVGhlIENpdHnvvJrjgrfjg6Pjg4Pjgr/jg7zjgYzooZfjga7ooajmg4Xjgavjgarjgovjgb7jgaciLCAieWVhciI6ICIyMDI2IiwgInR5cGUiOiAiam91cm5hbCIsICJzdGF0dXMiOiAicHVibGlzaGVkIiwgImV4Y2VycHQiOiAi6ZaJ44GY44Gf44K344Oj44OD44K/44O844KS44CB5Zyw5Z+f44Gu44Ki44O844OG44Kj44K544OI44Gu5omL44Gn6KGX44Gu6aKo5pmv44Gr5aSJ44GI44Gm44GE44GP44Ki44O844OI44OX44Ot44K444Kn44Kv44OI44CMUGFpbnQgVGhlIENpdHnjgI3jgILooYzmlL/jgoTllYblupfooZfjgajmjqXntprjgZfjgarjgYzjgonjg5fjg63jgrjjgqfjgq/jg4jjgpLliY3jgavpgLLjgoHjgZ/jgIHkvLTotbDjga7oo4/lgbTjgIIiLCAiYm9keSI6ICLllYblupfooZfjgpLmranjgY/jgajjgIHplonjgZjjgZ/jgb7jgb7jga7jgrfjg6Pjg4Pjgr/jg7zjgYzkuKbjgbbkuIDop5LjgYzjgYLjgorjgb7jgZnjgILjgZ3jgozjgpLlnLDln5/jga7osqDjgajjgZfjgabopovjgovjga7jgYvjgIHjgb7jgaDmj4/jgYvjgozjgabjgYTjgarjgYTjgq3jg6Pjg7Pjg5DjgrnjgajjgZfjgabopovjgovjga7jgYvjgILjgIxQYWludCBUaGUgQ2l0eeOAjeOBr+OAgeW+jOiAheOBrueri+WgtOOBi+OCieWni+OBvuOBo+OBn+ODl+ODreOCuOOCp+OCr+ODiOOBp+OBmeOAglxuXG7jgrPjgrbjga7ooZfjga7jgrfjg6Pjg4Pjgr/jg7zjgpLjgIHlnLDln5/jga7jgqLjg7zjg4bjgqPjgrnjg4jjga7miYvjgafloZfjgormm7/jgYjjgabjgYTjgY/jgILml6XluLjjga7poqjmma/jgavjgIHmlrDjgZfjgYTooajmg4XjgpLnlJ/jgb/lh7rjgZnjgILoqIDokYnjgavjgZnjgozjgbDjgrfjg7Pjg5fjg6vjgafjgZnjgYzjgIHlrp/pmpvjgavooZfjgpLli5XjgYvjgZnjgavjga/jgIHjgqLjg7zjg4bjgqPjgrnjg4jjga7pgbjlrprjgoTjg4fjgqPjg6zjgq/jgrfjg6fjg7PjgaDjgZHjgafjgarjgY/jgIHlnLDmqKnogIXjgIHllYblupfooZfntYTlkIjjgIHjgZ3jgZfjgabooYzmlL/jgajjga7kuIHlr6fjgarmjqXntprjgYzmrKDjgYvjgZvjgb7jgZvjgpPjgILoqrDjgYvjgbLjgajjgorjga7nhrHph4/jgaDjgZHjgafjga/liY3jgavpgLLjgb7jgarjgYTpoJjln5/jgafjgZnjgIJcblxuQ2lnbmFsc+OBjOaLheOBo+OBn+OBruOBr+OAgeOBneOBruaOpee2mueCueOBruioreioiOOBp+OBl+OBn+OAguOCouODvOODiOODh+OCo+ODrOOCr+OCt+ODp+ODs+OAgeOCr+ODquOCqOOCpOODhuOCo+ODluOBruiqv+aVtOOAgeOBneOBl+OBpuWQhOaJgOOBqOOBruWQiOaEj+W9ouaIkOOAguODl+ODreOCuOOCp+OCr+ODiOOBjOOAjOmdoueZveOBhOOAjeOBoOOBkeOBp+e1guOCj+OCieOBmuOAgeihl+OBq+aui+OCi+OCguOBruOBq+OBquOCi+OCiOOBhuOAgeiomOaGtuOBq+aui+OCi+ODk+OCuOODpeOCouODq+aOpeeCueOBqOOBl+OBpuioreioiOOBl+OBpuOBhOOBjeOBvuOBl+OBn+OAglxuXG7ooYzmlL/jga/np4HjgZ/jgaHjgavjgajjgaPjgabjgIHllrbmpa3lhYjjgajjgYTjgYbjgojjgorph43opoHjgarjg5Hjg7zjg4jjg4rjg7zjgafjgZnjgILlnLDln5/jgpLlpInjgYjjgovjg5fjg63jgrjjgqfjgq/jg4jjga/jgIHmsJHplpPjga7nhrHph4/jgajlhazlhbHjga7mnqDntYTjgb/jgYzlmZvjgb/lkIjjgaPjgZ/jgajjgY3jgavjgIHkuIDnlarlpKfjgY3jgY/li5XjgY3jgb7jgZnjgILooZfjgpLoiJ7lj7DjgavkvZXjgYvjgpLku5XmjpvjgZHjgZ/jgYTjgajogIPjgYjjgabjgYTjgovkvIHmpa3jgoTlm6PkvZPjgYzjgYLjgozjgbDjgIHjgZ3jga7mp4vmg7PmrrXpmo7jgYvjgonjgZTkuIDnt5LjgafjgY3jgb7jgZnjgIIiLCAibWFpbkltYWdlIjogImltYWdlcy9wcm9qZWN0cy8yMDI0LXBhaW50LXRoZS1jaXR5L3Bob3Rvcy8wMi1pbWctOTY2NS5qcGVnIiwgImdhbGxlcnkiOiBbXSwgInRhZ3MiOiBbIlB1YmxpYyBBcnQiLCAi44G+44Gh44Gl44GP44KKIiwgIuOCs+OCtiIsICLooYzmlL/pgKPmkLoiXSwgInB1Ymxpc2hlZEF0IjogIjIwMjYtMDItMTAiLCAiY3JlZGl0cyI6IHt9fSwgeyJpZCI6ICIyMDI1LWtvemFyb2Nrcy1iZWhpbmQiLCAidGl0bGUiOiAiS09aQVJPQ0tT77ya6KGX44KS5be744GN6L6844KA54ax6YeP44KS44CB5Y+v6KaW5YyW44GZ44KLIiwgInllYXIiOiAiMjAyNSIsICJ0eXBlIjogImpvdXJuYWwiLCAic3RhdHVzIjogInB1Ymxpc2hlZCIsICJleGNlcnB0IjogIuS8geeUu+OAgeODh+OCtuOCpOODs+OAgVNOU+OCr+ODquOCqOOCpOODhuOCo+ODluOAgeePvuWgtOODh+OCo+ODrOOCr+OCt+ODp+ODs+OBvuOBp+aoquaWreOBl+OAgeOCs+OCtuOBrueGsemHj+OCkuWPr+imluWMluOBl+OBn+mDveW4guWei+ODleOCp+OCuUtPWkFST0NLU+OAguihl+ODu+mfs+alveODu+S6uuOCkuOBpOOBquOBkOWwjue3muOCkuOAgeOBqeOBhuioreioiOOBl+OBn+OBruOBi+OAgiIsICJib2R5IjogIktPWkFST0NLU+OBr+OAgeOCs+OCtuOBruihl+OCkuW3u+OBjei+vOOCgOmDveW4guWei+OBruODleOCp+OCueOBp+OBmeOAgumfs+alveOBjOOBguOCiuOAgeS6uuOBjOOBguOCiuOAgeihl+OBjOOBguOCi+OAguOBneOBrueGsemHj+OCkuOBqeOBhuWPr+imluWMluOBl+OAgeOBqeOBhuasoeOBq+OBpOOBquOBkuOCi+OBi+OAgkNpZ25hbHPjga/kvIHnlLvmrrXpmo7jgYvjgonnj77loLTjga7jg4fjgqPjg6zjgq/jgrfjg6fjg7Pjgb7jgafjgIHmqKrmlq3nmoTjgavkvLTotbDjgZfjgb7jgZfjgZ/jgIJcblxu56eB44Gf44Gh44GM5ouF5b2T44GX44Gf44Gu44Gv44CB5LyB55S744CB44OH44K244Kk44Oz44CBU05T44Kv44Oq44Ko44Kk44OG44Kj44OW44CB54++5aC044OH44Kj44Os44Kv44K344On44Oz44Go44GE44Gj44Gf6KSH5pWw44Gu6aCY5Z+f44Gn44GZ44CC44Gf44Gg44CB44Gd44KM44Ge44KM44KS5YCL5Yil44Gu5Yi25L2c54mp44Go44GX44Gm57SN5ZOB44GX44Gf44KP44GR44Gn44Gv44GC44KK44G+44Gb44KT44CC6KGX44O76Z+z5qW944O75Lq644KS44Gk44Gq44GQ44Gy44Go44Gk44Gu5bCO57ea44Go44GX44Gm44CB5YWo5L2T44KS6Kit6KiI44GX44G+44GX44Gf44CC44Od44K544K/44O85LiA5p6a44CB5oqV56i/5LiA5pys44Gr44KC44CB44CM44GT44Gu44OV44Kn44K544GM5L2V44KS55uu5oyH44GX44Gm44GE44KL44Gu44GL44CN44Go44GE44GG5paH6ISI44KS6YCa44GZ44CC44Gd44KM44GM44OW44Op44Oz44OJ44Go44GX44Gm44Gu5LiA6LKr5oCn44KS55Sf44G/44G+44GZ44CCXG5cbuOCpOODmeODs+ODiOOBr+OAgeW9k+aXpeOCkuODlOODvOOCr+OBq+a2iOOBiOOBpuOBhOOBj+OCguOBruOBq+OBquOCiuOBjOOBoeOBp+OBmeOAguOBoOOBi+OCieOBk+OBneOAgeW9k+aXpeOBvuOBp+OBruebm+OCiuS4iuOBjOOCiuOBqOOAgeW9k+aXpeS7pemZjeOBq+aui+OCi+iomOmMsuOBruS4oeaWueOCkuioreioiOOBmeOCi+OBk+OBqOOCkuWkp+WIh+OBq+OBl+OBvuOBl+OBn+OAguODleOCp+OCueOBjOe1guOCj+OBo+OBn+OBguOBqOOBq+OCguOAgeihl+OBruiomOaGtuOBqOOBl+OBpuOAgeasoeOBruaMkeaIpuOBruOBjeOBo+OBi+OBkeOBqOOBl+OBpuaui+OBo+OBpuOBhOOBj+OAglxuXG7lpKfopo/mqKHjgarjg5XjgqfjgrnjgYvjgonjgIHlsI/jgZXjgarkuIDlpJzpmZDjgorjga7jgrvjg4Pjgrfjg6fjg7Pjgb7jgafjgILopo/mqKHjga7lpKflsI/jgavjgYvjgYvjgo/jgonjgZrjgIHjgIznhrHph4/jgpLlvaLjgavjgZfjgabjgIHmrKHjgavjgaTjgarjgZLjgovjgI3jgajjgYTjgYboqK3oqIjmgJ3mg7Pjga/lpInjgo/jgorjgb7jgZvjgpPjgILooZfjgpLoiJ7lj7DjgavjgZfjgZ/jg5fjg63jgrjjgqfjgq/jg4jjga7mp4vmg7PjgYzjgYLjgozjgbDjgIHjgZzjgbLogZ7jgYvjgZvjgabjgY/jgaDjgZXjgYTjgIIiLCAibWFpbkltYWdlIjogImltYWdlcy9wcm9qZWN0cy8yMDI1LWtvemFyb2Nrcy0yMDI1L3Bob3Rvcy8wMi1pbWctMjQxNC5qcGciLCAiZ2FsbGVyeSI6IFtdLCAidGFncyI6IFsiRmVzdGl2YWwiLCAiQnJhbmRpbmciLCAiUHJvZHVjZSIsICLjgrPjgrYiXSwgInB1Ymxpc2hlZEF0IjogIjIwMjUtMTEtMTgiLCAiY3JlZGl0cyI6IHt9fV0sICJkYXRhL3NlcnZpY2VzLmpzb24iOiBbeyJpZCI6ICJwcm9kdWNlIiwgIm51bWJlciI6ICIwMSIsICJ0aXRsZSI6ICLlnLDln5/jg5fjg63jgrjjgqfjgq/jg4jjg5fjg63jg4fjg6Xjg7zjgrkiLCAiZW4iOiAiUmVnaW9uYWwgUHJvamVjdCBQcm9kdWNlIiwgImxlYWQiOiAi5Zyw5Z+f44Gu5oyR5oim44Gr44CB5qeL5oOz5q616ZqO44GL44KJ5pyI6aGN44Gn5Ly06LWw44CC44Kk44OZ44Oz44OI44O744OH44K244Kk44Oz44O75pig5YOP44O7U05T44KS5omL5q6144Go44GX44Gm5p2f44Gt44CB5oiQ5p6c54mp44Gn44Gv44Gq44GP5oiQ5p6c44KS5bGK44GR44G+44GZ44CCIiwgInRleHQiOiAiQ2lnbmFsc+OBruS4reW/g+OBq+OBguOCi+WVhuWTgeOBp+OBmeOAguODl+ODreOCuOOCp+OCr+ODiOOBruebrueahOaVtOeQhuOBi+OCieOAgeWcsOWfn+OBqOOBruaOpee2muOAgeOCr+ODquOCqOOCpOODhuOCo+ODluOBrue1seaLrOOAgeaciOasoeOBruS8tOi1sOOBvuOBp+OCkuS4gOiyq+OBl+OBpuaLheOBhOOBvuOBmeOAguWNmOeZuuOBruWItuS9nOOChOOCpOODmeODs+ODiOOBp+OBr+OBquOBj+OAgeODl+ODreOCuOOCp+OCr+ODiOOBneOBruOCguOBruOBruaIkOWKn+OBq+iyrOS7u+OCkuaMgeOBpOOAgeS8tOi1sOWei+OBruWlkee0hOOBp+OBmeOAgiIsICJ0YXJnZXRzIjogWyLlnLDln5/jgafmlrDjgZfjgYTjg5fjg63jgrjjgqfjgq/jg4jjgpLnq4vjgaHkuIrjgZLjgZ/jgYTkvIHmpa3jg7vlm6PkvZMiLCAi5Y2Y55m644Gu5Yi25L2c44Gn57WC44KP44KJ44Gb44Ga44CB5LqL5qWt44KE5paH5YyW44Go44GX44Gm57aa44GR44Gf44GEIiwgIuaylue4hOODu+OCs+OCtuOBp+ODl+ODreOCuOOCp+OCr+ODiOOCkuS7leaOm+OBkeOBn+OBhOecjOWkluS8gealrSIsICLjgq/jg6rjgqjjgqTjg4bjgqPjg5bjgajjg5fjg63jg4fjg6Xjg7zjgrnjgpLku7vjgZvjgonjgozjgovlpJbpg6jjg5Hjg7zjg4jjg4rjg7zjgYzmrLLjgZfjgYQiXSwgInByaWNlIjogIuaciOmhjSDCpTIwMCwwMDDvvIjliLbkvZzlrp/osrvjga/liKXlpZHntITvvInjgILjgb7jgZrjga8zMOWIhuOBrueEoeaWmeebuOirh+OBi+OCieOAgiIsICJpbWFnZSI6ICJpbWFnZXMvcHJvamVjdHMvMjAyNS1rb3phcm9ja3MtMjAyNS9waG90b3MvMDEtZHNjLTYzMTcuanBnIn0sIHsiaWQiOiAidHJhaW5pbmctcmV0cmVhdCIsICJudW1iZXIiOiAiMDIiLCAidGl0bGUiOiAi5LyB5qWt56CU5L+u44O75ZCI5a6/44OX44Ot44Kw44Op44OgIiwgImVuIjogIkNvcnBvcmF0ZSBUcmFpbmluZyAmIFJldHJlYXQiLCAibGVhZCI6ICJLT1pBIEJBU0VDQU1Q44GoQXJjYWRlIFJlc29ydCBPa2luYXdh44KS6KGM44GN5p2l44GX44Gq44GM44KJ44CB6KGX44KS5pWZ5p2Q44Gr44OB44O844Og44Gu5oSf6Kaa44KS44Gy44KJ44GP44CCIiwgInRleHQiOiAi5Lya6K2w5a6k44Gg44GR44Gn44Gv55Sf44G+44KM44Gq44GE5a++6Kmx44KS44CB44Kz44K244Gu6KGX44O76Z+z5qW944O75a6/5rOK44O75Yi25L2c44K544K/44K444Kq44Gu55Kw5aKD44G45oyB44Gh5Ye644GX44G+44GZ44CC5pel5Lit44Gv6KGX5q2p44GN44KE44OV44Kj44O844Or44OJ44Ov44O844Kv44Gn5ZWP44GE44KS6ZuG44KB44CB5aSc44GvQkFTRUNBTVDjgafoqIDokYnjgoTkvIHnlLvjgbjnt6jpm4bjgZnjgovjgIJDaWduYWxz44Gv44CB56CU5L+u44Gu6Kit6KiI44GL44KJ44OV44Kh44K344Oq44OG44O844K344On44Oz44CB6KiY6Yyy44CB5oiQ5p6c54mp5YyW44G+44Gn5Ly06LWw44GX44G+44GZ44CCIiwgInRhcmdldHMiOiBbIue1jOWWtuODgeODvOODoOOChOaWsOimj+S6i+alreODgeODvOODoOOBruimluW6p+OCkuaPg+OBiOOBn+OBhCIsICLoi6XmiYvjg7vmlrDljZLjgavotorlooPkvZPpqJPjgajliLrmv4DjgpLkuI7jgYjjgZ/jgYQiLCAi6YCa5bi444Gu44Kq44OV44K144Kk44OI5ZCI5a6/44Gn44Gv54mp6Laz44KK44Gq44GEIiwgIuaylue4hOODu+OCs+OCtuOBruaWh+WMluizh+a6kOOCkuS9v+OBo+OBn+eglOS/ruOCkuWun+aWveOBl+OBn+OBhCJdLCAicHJpY2UiOiAiwqUyMDAsMDAw44CcIC8gMTDlkI3jg7sz5rOK5oOz5a6a44CC5a6/5rOK44O76aOf5LqL44O744OX44Ot44Kw44Op44Og6Kit6KiI44Gv5Yil6YCU44GK6KaL56mN44KK44CCIiwgImltYWdlIjogImltYWdlcy9wcm9qZWN0cy9qb3VybmFsLTIwMjYtb25lLW5pZ2h0LW1ha2Vsb3ZlLXZvbDIvcGhvdG9zLzAxLWluc3RhZ3JhbS1wb3N0LTcuanBnIn0sIHsiaWQiOiAiY3JlYXRvci1yZXNpZGVuY2UiLCAibnVtYmVyIjogIjAzIiwgInRpdGxlIjogIuOCr+ODquOCqOOCpOOCv+ODvOa7nuWcqOODl+ODreOCsOODqeODoCIsICJlbiI6ICJDcmVhdG9yLWluLVJlc2lkZW5jZSIsICJsZWFkIjogIua7nuWcqOOBmeOCi+OAgeatqeOBj+OAgeipseOBmeOAgeOBpOOBj+OCi+OAguOCs+OCtuOBruepuuawl+OCkuS9nOWTgeOChOODluODqeODs+ODieOBrue0oOadkOOBuOWkieOBiOOCi+OAgiIsICJ0ZXh0IjogIkFyY2FkZSBSZXNvcnQgT2tpbmF3YeOCkua7nuWcqOaLoOeCueOBq+OAgUtPWkEgQkFTRUNBTVDjgpLliLbkvZzmi6DngrnjgajjgZfjgabntYTjgb/lkIjjgo/jgZvjgovjgZPjgajjgafjgIHnn63mnJ/mu57lnKjjgafjgoLmv4PjgYTjgqLjgqbjg4jjg5fjg4Pjg4jjgpLnlJ/jgb/lh7rjgZfjgb7jgZnjgILpn7Pmpb3jgIHmmKDlg4/jgIHlhpnnnJ/jgIHjg4fjgrbjgqTjg7PjgIHmlofnq6DjgarjganjgIHpoJjln5/jgpLllY/jgo/jgZrjgIHooZfjgajmjqXntprjgZfjgZ/liLbkvZzjg5fjg63jgrvjgrnjgpLoqK3oqIjjgZfjgb7jgZnjgIIiLCAidGFyZ2V0cyI6IFsi5LyB5qWt44OW44Op44Oz44OJ44Gu44OJ44Kt44Ol44Oh44Oz44K/44Oq44O844KEU05T57Sg5p2Q44KS44Gk44GP44KK44Gf44GEIiwgIuekvuWGheOCr+ODquOCqOOCpOOCv+ODvOOBq+WkluOBruepuuawl+OCkuWQuOOCj+OBm+OBn+OBhCIsICLlnLDln5/jgajmjqXntprjgZfjgZ/nmbrkv6Hjg7vkvZzlk4HliLbkvZzjgpLooYzjgYTjgZ/jgYQiLCAi6KOc5Yqp6YeR44O75Yqp5oiQ6YeR44KS5rS755So44GX44Gf5paH5YyW5LyB55S744KS57WE44G/44Gf44GEIl0sICJwcmljZSI6ICIx6YCx6ZaT44CcM+ODtuaciCAvIOimj+aooeODu+acn+mWk+ODu+S6uuaVsOOBq+OCiOOCiuWkieWLleOAgiIsICJpbWFnZSI6ICJpbWFnZXMvcHJvamVjdHMvam91cm5hbC0yMDI2LW9uZS1uaWdodC1tYWtlbG92ZS12b2wyL3Bob3Rvcy8wMi1pbnN0YWdyYW0tcG9zdC05LmpwZyJ9LCB7ImlkIjogImNyZWF0aXZlLWV2ZW50IiwgIm51bWJlciI6ICIwNCIsICJ0aXRsZSI6ICLliLbkvZzjg7vjgqTjg5njg7Pjg4jjg5fjg63jg4fjg6Xjg7zjgrkiLCAiZW4iOiAiQ3JlYXRpdmUgJiBFdmVudCBQcm9kdWNlIiwgImxlYWQiOiAi5LyB55S744Gu56uL44Gh5LiK44GS44GL44KJ44CB54++5aC044Gu54ax54uC44Go6KiY6Yyy44Gu6Kit6KiI44G+44Gn44CCIiwgInRleHQiOiAiS09aQVJPQ0tT44KE44OR44Or44Of44Op5aSc5biC44Gu44KI44GG44Gr44CB6KGX44KS5be744GN6L6844KA5LyB55S744KS5qeL5oOz5q616ZqO44GL44KJ5b2i44Gr44GX44G+44GZ44CC44Kk44OZ44Oz44OI6YGL5Za244Gg44GR44Gn44Gq44GP44CB44Kt44O844OT44K444Ol44Ki44Or44CBV2Vi44CBU05T44CB5pig5YOP44CB6KiY6Yyy44CB44K544Od44Oz44K144O85o+Q5qGI44G+44Gn44CB44OX44Ot44K444Kn44Kv44OI44GM56S+5Lya44Gr5bGK44GP44Gf44KB44Gu5bCO57ea44KS5LiA5rCX6YCa6LKr44Gn6Kit6KiI44GX44G+44GZ44CCIiwgInRhcmdldHMiOiBbIuOCpOODmeODs+ODiOS8geeUu+ODu+mBi+WWtuOCkuS7u+OBm+OBn+OBhCIsICLmmKDlg4/jg7vjgrDjg6njg5XjgqPjg4Pjgq/jg7tXZWLjgb7jgafjgb7jgajjgoHjgabmlbTjgYjjgZ/jgYQiLCAi6KGM5pS/5Y+X6KiX44KE6KOc5Yqp6YeR5rS755So44OX44Ot44K444Kn44Kv44OI44KS6YCy44KB44Gf44GEIiwgIlNOU+OCs+ODs+ODhuODs+ODhOOChOOCs+ODn+ODpeODi+ODhuOCo+W9ouaIkOOBvuOBp+ebuOirh+OBl+OBn+OBhCJdLCAicHJpY2UiOiAi5YaF5a6544O76KaP5qih44Gr5b+c44GY44Gm5YCL5Yil6KaL56mN44KC44KK44CCIiwgImltYWdlIjogImltYWdlcy9wcm9qZWN0cy8yMDI1LWtvemFyb2Nrcy0yMDI1L3Bob3Rvcy8wMS1kc2MtNjMxNy5qcGcifV19'), (char) => char.charCodeAt(0))));

const fetchJSON = async (path) => {
  if (window.location.protocol === 'file:' && LOCAL_DATA[path]) return LOCAL_DATA[path];
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`${path} の読み込みに失敗しました`);
    return res.json();
  } catch (error) {
    if (LOCAL_DATA[path]) return LOCAL_DATA[path];
    throw error;
  }
};

const escapeHTML = (value = '') => String(value).replace(/[&<>"]/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[s]));
const media = (src, alt) => src ? `<img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy">` : `<div class="placeholder">写真素材を追加してください</div>`;
const tagList = (items = []) => `<div class="tags">${items.map(s => `<span class="tag">${escapeHTML(s)}</span>`).join('')}</div>`;

const projectCard = (p) => `
  <article class="home-project-card reveal-item">
    <a class="home-project-media" href="projects.html#${escapeHTML(p.id)}" aria-label="${escapeHTML(p.title)}の詳細を見る">${media(p.mainImage, p.title)}</a>
    <div class="home-project-caption">
      <p class="project-name-label">Project Name</p>
      <h3>${escapeHTML(p.title)}</h3>
      <p>${escapeHTML(p.summary || p.description)}</p>
      <a class="text-link arrow-link" href="projects.html#${escapeHTML(p.id)}">詳細を見る <span aria-hidden="true">→</span></a>
    </div>
  </article>`;

const journalCard = (j) => `
  <article class="card">
    <a class="card-media" href="journal.html#${escapeHTML(j.id)}">${media(j.mainImage, j.title)}</a>
    <div class="card-body">
      <div class="meta"><span>${escapeHTML(j.year)}</span><span>${escapeHTML(j.status)}</span></div>
      <h3>${escapeHTML(j.title)}</h3>
      <p>${escapeHTML(j.excerpt)}</p>
      ${tagList(j.tags || [])}
    </div>
  </article>`;

const serviceCard = (s) => `
  <article class="service-card reveal-item">
    <span class="service-number">${escapeHTML(s.number)}</span>
    <h3>${escapeHTML(s.title)}</h3>
    <p>${escapeHTML(s.lead || s.text)}</p>
    <a class="text-link arrow-link" href="services.html#${escapeHTML(s.id)}">詳しく見る <span aria-hidden="true">→</span></a>
  </article>`;

const projectDetailCard = (p) => `
  <article class="project-detail" id="${escapeHTML(p.id)}">
    <div class="project-detail-media">${media(p.mainImage, p.title)}</div>
    <div class="project-detail-body">
      <div class="meta"><span>${escapeHTML(p.year)}</span><span>${escapeHTML(p.category)}</span></div>
      <h2>${escapeHTML(p.title)}${p.subtitle ? `<small>${escapeHTML(p.subtitle)}</small>` : ''}</h2>
      <p>${escapeHTML(p.description)}</p>
      ${tagList(p.services || [])}
      ${p.needsAssets ? '<p class="notice">素材追加待ち：Webリニューアル前後のキャプチャ、設計資料、成果メモを追加してください。</p>' : ''}
      ${p.externalUrl ? `<a class="button" href="${escapeHTML(p.externalUrl)}" target="_blank" rel="noopener">サイトを見る ↗</a>` : ''}
    </div>
  </article>`;

const journalArticle = (j) => {
  const paragraphs = String(j.body || '').split(/\n\n+/).filter(Boolean).map(p => `<p>${escapeHTML(p)}</p>`).join('');
  const credits = j.credits ? Object.entries(j.credits).map(([k, v]) => `<dt>${escapeHTML(k)}</dt><dd>${escapeHTML(v)}</dd>`).join('') : '';
  return `<article class="journal-article" id="${escapeHTML(j.id)}">
    <div class="journal-hero-media">${media(j.mainImage, j.title)}</div>
    <div class="journal-content">
      <div class="meta"><span>${escapeHTML(j.publishedAt || j.year)}</span><span>${escapeHTML(j.type)}</span></div>
      <h2>${escapeHTML(j.title)}</h2>
      <p class="lead">${escapeHTML(j.excerpt)}</p>
      ${paragraphs}
      ${tagList(j.tags || [])}
      ${credits ? `<dl class="credit-list">${credits}</dl>` : ''}
    </div>
  </article>`;
};

const serviceDetail = (s) => {
  // 専用LPを持つサービスは、それぞれのLPへ誘導する
  const LP_MAP = {
    'training-retreat': { href: 'services.html', text: 'この内容で相談する' },
    'produce': { href: 'produce.html', text: 'プロデュース契約を詳しく見る' }
  };
  const lp = LP_MAP[s.id];
  const btnHref = lp ? lp.href : 'contact.html';
  const btnText = lp ? lp.text : 'この内容で相談する';

  return `
  <article class="service-detail reveal-item" id="${escapeHTML(s.id)}">
    <div class="service-visual">${media(s.image, s.title)}</div>
    <div class="service-detail-body">
      <p class="eyebrow">${escapeHTML(s.number)} / ${escapeHTML(s.en)}</p>
      <h2>${escapeHTML(s.title)}</h2>
      <p class="lead">${escapeHTML(s.lead)}</p>
      <p>${escapeHTML(s.text)}</p>
      <h3>こんな企業・行政へ</h3>
      <ul>${(s.targets || []).map(t => `<li>${escapeHTML(t)}</li>`).join('')}</ul>
      <p class="notice">${escapeHTML(s.price)}</p>
      <a class="button arrow-button" href="${btnHref}">${btnText} <span aria-hidden="true">→</span></a>
    </div>
  </article>`;
};

const mountHome = async () => {
  const [projects, journal, services] = await Promise.all([fetchJSON('data/projects.json'), fetchJSON('data/journal.json'), fetchJSON('data/services.json')]);
  const pLimit = Number(document.querySelector('#projectGrid')?.dataset.limit || projects.length);
  const jLimit = Number(document.querySelector('#journalGrid')?.dataset.limit || journal.length);
  document.querySelector('#projectGrid').innerHTML = projects.slice(0, pLimit).map(projectCard).join('');
  document.querySelector('#journalGrid').innerHTML = journal.slice(0, jLimit).map(journalCard).join('');
  document.querySelector('#serviceGrid').innerHTML = services.map(serviceCard).join('');
};

const mountProjects = async () => {
  const projects = await fetchJSON('data/projects.json');
  document.querySelector('#projectGrid').innerHTML = projects.map(projectDetailCard).join('');
};

const mountJournal = async () => {
  const journal = await fetchJSON('data/journal.json');
  document.querySelector('#journalArticleList').innerHTML = journal.map(journalArticle).join('');
};

const mountServices = async () => {
  const services = await fetchJSON('data/services.json');
  document.querySelector('#serviceDetailList').innerHTML = services.map(serviceDetail).join('');
};

const mountContact = () => {
  const form = document.querySelector('#contactForm');
  const thanks = document.querySelector('#formThanks');
  if (!form) return;
  // ssgform へ POST するためフォームのデフォルト送信をそのまま使用
  // （event.preventDefault() / mailto: は使わない）
};

const initMotion = () => {
  document.querySelectorAll('.card, .home-project-card, .project-detail, .service-card, .service-detail, .place-card, .values-grid article, .member-grid article').forEach((el) => {
    el.classList.add('motion-card');
  });

  const revealTargets = document.querySelectorAll('.section, .page-hero, .hero, .cta, .motion-card, .reveal-item');
  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => observer.observe(el));
};

const initFaqAccordion = () => {
  document.querySelectorAll(".faq-list article").forEach((article) => {
    article.addEventListener("click", () => {
      article.classList.toggle("is-open");
    });
  });
};
/* ===== TimeRex予約ボタンのクリックをGA4イベントとして計測 ===== */
const initReservationTracking = () => {
  document.querySelectorAll('a[href*="timerex.net"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'reservation_click', {
          location: link.dataset.cta || 'unknown',
          page: document.body.dataset.page || 'home'
        });
      }
    });
  });
};

const init = async () => {
  const page = document.body.dataset.page || 'home';
  if (page === 'home') await mountHome();
  if (page === 'projects') await mountProjects();
  if (page === 'journal') await mountJournal();
  if (page === 'services') await mountServices();
  if (page === 'contact') mountContact();
  initMotion();
  initFaqAccordion();
  initTypewriter();
  initHamburger();
  initReservationTracking();
};

init().catch((error) => {
  console.error(error);
  document.body.insertAdjacentHTML('beforeend', `<p style="padding:24px;color:#eb0034">${escapeHTML(error.message)}</p>`);
});

/* ===== Typewriter: Home About Section ===== */
const initTypewriter = () => {
  const section = document.getElementById('home-about');
  if (!section) return;

  const paras = section.querySelectorAll('.typewriter-para');
  if (!paras.length) return;

  // 各段落のテキストをspanに分解
  paras.forEach((para) => {
    const raw = para.innerHTML
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
    para.innerHTML = '';
    [...raw].forEach((ch) => {
      if (ch === '\n') {
        para.appendChild(document.createElement('br'));
      } else {
        const span = document.createElement('span');
        span.className = 'typewriter-char';
        span.textContent = ch;
        para.appendChild(span);
      }
    });
  });

  // カーソル要素
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';

  let started = false;

  const startTyping = () => {
    if (started) return;
    started = true;
    section.classList.add('typewriter-started');

    const allChars = Array.from(section.querySelectorAll('.typewriter-char'));
    const BASE_SPEED = 28; // ms/char
    const PARA_PAUSE = 320; // ms between paragraphs

    let delay = 0;
    let lastPara = null;

    allChars.forEach((span, i) => {
      const para = span.closest('.typewriter-para');
      if (para !== lastPara) {
        if (lastPara !== null) delay += PARA_PAUSE;
        lastPara = para;
      }
      const d = delay;
      setTimeout(() => {
        span.classList.add('visible');
        // カーソルを現在の文字の後ろに移動
        span.after(cursor);
        // 最後の文字のあとカーソルを消す
        if (i === allChars.length - 1) {
          setTimeout(() => cursor.remove(), 1800);
        }
      }, d);
      delay += BASE_SPEED + Math.random() * 14;
    });
  };

  // IntersectionObserver でビューポートに入ったら開始
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTyping();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.25 }
  );
  observer.observe(section);
};

/* ===== Hamburger Menu ===== */
const initHamburger = () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primaryNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });

  // ナビリンクをタップしたらメニューを閉じる
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'メニューを開く');
    });
  });

  // メニュー外タップで閉じる
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'メニューを開く');
    }
  });
};
