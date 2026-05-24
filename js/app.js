const LOCAL_DATA = JSON.parse(new TextDecoder().decode(Uint8Array.from(atob('eyJkYXRhL3Byb2plY3RzLmpzb24iOlt7ImlkIjoiMjAyNC1wYWludC10aGUtY2l0eSIsInRpdGxlIjoiUGFpbnQgVGhlIENpdHkiLCJzdWJ0aXRsZSI6IuOCt+ODo+ODg+OCv+ODvOOCouODvOODiCIsInllYXIiOiIyMDI0IiwiY2F0ZWdvcnkiOiJQdWJsaWMgQXJ0IC8gU2h1dHRlciBBcnQiLCJjbGllbnQiOiJQYWludCBUaGUgQ2l0eSIsImxvY2F0aW9uIjoiT2tpbmF3YSAvIEtvemEiLCJkZXNjcmlwdGlvbiI6Iuihl+OBruOCt+ODo+ODg+OCv+ODvOOCkuOCreODo+ODs+ODkOOCueOBq+WkieOBiOOAgeaXpeW4uOOBrumiqOaZr+OBq+aWsOOBl+OBhOihqOaDheOCkueUn+OBv+WHuuOBmeOCouODvOODiOODl+ODreOCuOOCp+OCr+ODiOOAguWcsOWfn+OBruimlue3muOBjOmbhuOBvuOCi+WgtOaJgOOBq+OAgeiomOaGtuOBq+aui+OCi+ODk+OCuOODpeOCouODq+aOpeeCueOCkuioreioiOOBl+OBvuOBl+OBn+OAgiIsInN1bW1hcnkiOiLooZfjga7kvZnnmb3jgpLjgIHmlofljJbjga7lhaXlj6PjgbjlpInjgYjjgovjgrfjg6Pjg4Pjgr/jg7zjgqLjg7zjg4jjgIIiLCJzZXJ2aWNlcyI6WyJBcnQgRGlyZWN0aW9uIiwiQ3JlYXRpdmUgQ29vcmRpbmF0aW9uIiwiRG9jdW1lbnRhdGlvbiJdLCJtYWluSW1hZ2UiOiJpbWFnZXMvcHJvamVjdHMvMjAyNC1wYWludC10aGUtY2l0eS9waG90b3MvMDEtaW1nLTg5NzAuanBlZyIsImdhbGxlcnkiOlsiaW1hZ2VzL3Byb2plY3RzLzIwMjQtcGFpbnQtdGhlLWNpdHkvcGhvdG9zLzAxLWltZy04OTcwLmpwZWciLCJpbWFnZXMvcHJvamVjdHMvMjAyNC1wYWludC10aGUtY2l0eS9waG90b3MvMDItaW1nLTk2NjUuanBlZyIsImltYWdlcy9wcm9qZWN0cy8yMDI0LXBhaW50LXRoZS1jaXR5L2Rlc2lnbnMvMDEtcGFpbnQtdGhlLWNpdHkyMDI0LmpwZyJdLCJleHRlcm5hbFVybCI6IiIsInN0YXR1cyI6InB1Ymxpc2hlZCIsIm5lZWRzQXNzZXRzIjpmYWxzZX0seyJpZCI6IjIwMjUtcGFsbXlyYS1uaWdodC1tYXJrZXQiLCJ0aXRsZSI6IuODkeODq+ODn+ODqeWknOW4giIsInN1YnRpdGxlIjoi5Zyw5Z+f44Go5Lq644GM5re344GW44KL44OK44Kk44OI44Oe44O844Kx44OD44OIIiwieWVhciI6IjIwMjUiLCJjYXRlZ29yeSI6IkV2ZW50IFByb2R1Y2UgLyBDb21tdW5pdHkgRGVzaWduIiwiY2xpZW50IjoiUGFsbXlyYSBOaWdodCBNYXJrZXQiLCJsb2NhdGlvbiI6Ik9raW5hd2EgLyBLb3phIiwiZGVzY3JpcHRpb24iOiLlpJzjga7ooZfjgavkurrjga7mtYHjgozjgajkvJroqbHjgpLnlJ/jgb/lh7rjgZnjg63jg7zjgqvjg6vjg57jg7zjgrHjg4Pjg4jjgILlh7rlupfogIXjgIHmnaXloLTogIXjgIHlnLDln5/jga7nqbrmsJfjgpLjgaTjgarjgY7jgIHjgZ/jgaDjga7lgqzkuovjgafjga/jgarjgY/ooZfjga7oqJjmhrbjgavmrovjgovkvZPpqJPjgajjgZfjgabnt6jpm4bjgZfjgb7jgZfjgZ/jgIIiLCJzdW1tYXJ5Ijoi5Zyw5Z+f44Gu54ax6YeP44KS5aSc44Gu44Oe44O844Kx44OD44OI44Go44GX44Gm56uL44Gh5LiK44GS44KL44CCIiwic2VydmljZXMiOlsiQ3JlYXRpdmUgRGlyZWN0aW9uIiwiRXZlbnQgUGxhbm5pbmciLCJEZXNpZ24iLCJDb21tdW5pdHkgRGVzaWduIl0sIm1haW5JbWFnZSI6ImltYWdlcy9wcm9qZWN0cy8yMDI1LXBhbG15cmEtbmlnaHQtbWFya2V0LTIwMjUvZGVzaWducy8wMS1wYWxteXJhLW5pZ2h0LW1hcmtldC1wb3N0ZXItYTMtdHQtb21vdGUtb2wucG5nIiwiZ2FsbGVyeSI6WyJpbWFnZXMvcHJvamVjdHMvMjAyNS1wYWxteXJhLW5pZ2h0LW1hcmtldC0yMDI1L2Rlc2lnbnMvMDEtcGFsbXlyYS1uaWdodC1tYXJrZXQtcG9zdGVyLWEzLXR0LW9tb3RlLW9sLnBuZyJdLCJleHRlcm5hbFVybCI6IiIsInN0YXR1cyI6ImRyYWZ0IiwibmVlZHNBc3NldHMiOmZhbHNlfSx7ImlkIjoiMjAyNS1rb3phcm9ja3MiLCJ0aXRsZSI6IktPWkFST0NLUyIsInN1YnRpdGxlIjoi44Kz44K244Gu6KGX44KS5be744GN6L6844KA6Z+z5qW944O744Kr44Or44OB44Oj44O844OX44Ot44K444Kn44Kv44OIIiwieWVhciI6IjIwMjUiLCJjYXRlZ29yeSI6IkZlc3RpdmFsIC8gQnJhbmRpbmcgLyBQcm9kdWNlIiwiY2xpZW50IjoiS09aQVJPQ0tTIiwibG9jYXRpb24iOiJPa2luYXdhIC8gS296YSIsImRlc2NyaXB0aW9uIjoi5LyB55S744CB44OH44K244Kk44Oz44CBU05T44Kv44Oq44Ko44Kk44OG44Kj44OW44CB54++5aC044OH44Kj44Os44Kv44K344On44Oz44G+44Gn5qiq5pat44GX44CB44Kz44K244Gu54ax6YeP44KS5Y+v6KaW5YyW44GX44Gf44OX44Ot44K444Kn44Kv44OI44CC6KGX44O76Z+z5qW944O75Lq644KS44Gk44Gq44GQ5bCO57ea44KS6Kit6KiI44GX44G+44GX44Gf44CCIiwic3VtbWFyeSI6IuOCs+OCtuOBrueGsemHj+OCkuOAgemfs+alveOBqOihl+OBruS9k+mok+OBqOOBl+OBpuWxiuOBkeOCi+OAgiIsInNlcnZpY2VzIjpbIkNyZWF0aXZlIERpcmVjdGlvbiIsIlByb2plY3QgRGVzaWduIiwiRXZlbnQgUGxhbm5pbmciLCJCcmFuZGluZyIsIlNOUyBDcmVhdGl2ZSIsIkZpbG0gUHJvZHVjdGlvbiJdLCJtYWluSW1hZ2UiOiJpbWFnZXMvcHJvamVjdHMvMjAyNS1rb3phcm9ja3MtMjAyNS9waG90b3MvMDEtZHNjLTYzMTcuanBnIiwiZ2FsbGVyeSI6WyJpbWFnZXMvcHJvamVjdHMvMjAyNS1rb3phcm9ja3MtMjAyNS9waG90b3MvMDEtZHNjLTYzMTcuanBnIiwiaW1hZ2VzL3Byb2plY3RzLzIwMjUta296YXJvY2tzLTIwMjUvcGhvdG9zLzAyLWltZy0yNDE0LmpwZyIsImltYWdlcy9wcm9qZWN0cy8yMDI1LWtvemFyb2Nrcy0yMDI1L3Bob3Rvcy8wMy1weGwtMjAyNTA3MTItMDI1MjU0NTI1LW1wLmpwZyIsImltYWdlcy9wcm9qZWN0cy8yMDI1LWtvemFyb2Nrcy0yMDI1L3Bob3Rvcy8wNC1weGwtMjAyNTA3MTItMTAxMzQ0OTA4LW1wLmpwZyIsImltYWdlcy9wcm9qZWN0cy8yMDI1LWtvemFyb2Nrcy0yMDI1L2Rlc2lnbnMvMDEtMDQtYmFuYXItcmdiLnBuZyJdLCJleHRlcm5hbFVybCI6IiIsInN0YXR1cyI6InB1Ymxpc2hlZCIsIm5lZWRzQXNzZXRzIjpmYWxzZX0seyJpZCI6IjIwMjYtd29ya3Byb29mZmljZS1yZW5ld2FsIiwidGl0bGUiOiJ3b3JrcHJvb2ZmaWNlIOOCteOCpOODiOODquODi+ODpeODvOOCouODqyIsInN1YnRpdGxlIjoi5rOV5Lq65ZCR44GRV2Vi44Oq44OL44Ol44O844Ki44OrIiwieWVhciI6IjIwMjYiLCJjYXRlZ29yeSI6IldlYiBSZW5ld2FsIC8gQ29ycG9yYXRlIFNpdGUiLCJjbGllbnQiOiJ3b3JrcHJvb2ZmaWNlIiwibG9jYXRpb24iOiJPbmxpbmUiLCJkZXNjcmlwdGlvbiI6IuazleS6uuWQkeOBkeOCteODvOODk+OCueOBruS/oemgvOaEn+OBqOWVj+OBhOWQiOOCj+OBm+Wwjue3muOCkuaVtOeQhuOBmeOCi1dlYuODquODi+ODpeODvOOCouODq+ahiOS7tuOAguS6i+alreWGheWuueOBruS8neOCj+OCiuOChOOBmeOBleOAgUNW44Od44Kk44Oz44OI44CB5L+d5a6I44GX44KE44GZ44GE5oOF5aCx6Kit6KiI44KS6YeN6KaW44GX44Gf5Luu5a6f57i+44Go44GX44Gm5o6y6LyJ44GX44Gm44GE44G+44GZ44CCIiwic3VtbWFyeSI6IuS/oemgvOaEn+OBqENW5bCO57ea44KS5pW044GI44KL44CB5rOV5Lq644K144Kk44OI44Gu5YaN6Kit6KiI44CCIiwic2VydmljZXMiOlsiV2ViIERpcmVjdGlvbiIsIkluZm9ybWF0aW9uIEFyY2hpdGVjdHVyZSIsIlVJIERlc2lnbiIsIkZyb250ZW5kIl0sIm1haW5JbWFnZSI6IiIsImdhbGxlcnkiOltdLCJleHRlcm5hbFVybCI6Imh0dHBzOi8vd29ya3Byby1vZmZpY2UuY29tLyIsInN0YXR1cyI6ImRyYWZ0IiwibmVlZHNBc3NldHMiOnRydWV9XSwiZGF0YS9qb3VybmFsLmpzb24iOlt7ImlkIjoiMjAyNi1vbmUtbmlnaHQtbWFrZS1sb3ZlLXZvbDIiLCJ0aXRsZSI6Ik9ORSBOSUdIVCBNQUtFIExPVkUgdm9sLjIiLCJ5ZWFyIjoiMjAyNiIsInR5cGUiOiJqb3VybmFsIiwic3RhdHVzIjoicHVibGlzaGVkIiwiZXhjZXJwdCI6IkFyY2FkZSBSZXNvcnQgT2tpbmF3YeOBq+S4gOaziuOBl+OAgUtPWkEgQkFTRUNBTVDjga7jgrnjgr/jgrjjgqrjgafkuIDmm7LjgpLkvZzjgorkuIrjgZLjgovkvIHnlLvnrKzkuozlvL7jgILjgrPjgrbjga7ooZfjga7nqbrmsJfmhJ/jga7kuK3jgafnlJ/jgb7jgozjgZ/jg6rjgqLjg6vjgarjgrvjg4Pjgrfjg6fjg7Pjga7oqJjpjLLjgIIiLCJib2R5Ijoi44Kz44K25LiA55Wq6KGX5YaF44Gr44GC44KL44Ob44K544OG44Or44CBQXJjYWRlIFJlc29ydCBPa2luYXdh77yIQGFyY2FkZXJlc29ydG9raW5hd2FfYXJvX++8ieOBq+S4gOaziuOBl+OBpuOAgUtPWkEgQkFTRUNBTVDvvIhAa296YV9iYXNlY2FtcO+8ieOBruOCueOCv+OCuOOCquOBpzHmm7LjgpLkvZzjgorkuIrjgZLjgovjgajjgYTjgYbkvIHnlLvjgIxPTkUgTklHSFQgTUFLRSBMT1ZF44CN44CC44Gd44Gu56ys5LqM5by+44KS6KiY6Yyy44GX44GfSk9VUk5BTOOBp+OBmeOAglxuXG7nrKzkuozlvL7jga7jgrLjgrnjg4jjgavjga/jgIFCZWF0bWFrZXLjga5CYXp6cm9hcuawj++8iEBiYXp6cm9hcu+8ieOBjOWPguWKoOOAguOBneOBruODk+ODvOODiOOBq+S5l+OCi+OBruOBr+OAgVNMSU0gQk9Z5rCP77yIQGZzbGlta27vvInjgahMQVpa5rCP77yIQGRvZGdlcnp6X++8ieOAguOCs+OCtuOBruihl+OBruepuuawl+aEn+OBruS4reOBp+OAgTHms4oy5pel44Go44GE44GG6ZmQ44KJ44KM44Gf5pmC6ZaT44Gn5Yi25L2c44GV44KM44Gf5LiA5puy44Gv44CB44GT44Gu5aC05omA44Gg44GL44KJ44GT44Gd55Sf44G+44KM44Gf44Oq44Ki44Or44Gq44K744OD44K344On44Oz44Gr44Gq44KK44G+44GX44Gf44CCXG5cbuWQhOekvumFjeS/oeODquODquODvOOCueOBrzIwMjblubQwNOaciDA35pel44CCQmVhdCBieSBAYmF6enJvYXLjgIFSYXAgYnkgQGZzbGlta24gJiBAZG9kZ2Vyenpf44CCUG93ZXJlZCBieSBAY2lnbmFsc19qcOOAguS8geeUu+ODu+ani+aIkOOBryBAa296YV9iYXNlY2FtcCDjgaggQHl1a2JfZmVlbGJvbWLjgIFEaXJlY3RvcuOBr1l1a2kgTW90b211cmHvvIhGRUVMQk9NQu+8ieOAgURlc2lnbuOBr01FREFNQVlBS0nvvIhAc3VubnlfX3NpZGVfX3VwcGVy77yJ44GM5ouF5b2T44GX44Gm44GE44G+44GZ44CCIiwibWFpbkltYWdlIjoiaW1hZ2VzL3Byb2plY3RzL2pvdXJuYWwtMjAyNi1vbmUtbmlnaHQtbWFrZWxvdmUtdm9sMi9waG90b3MvMDEtaW5zdGFncmFtLXBvc3QtNy5qcGciLCJnYWxsZXJ5IjpbImltYWdlcy9wcm9qZWN0cy9qb3VybmFsLTIwMjYtb25lLW5pZ2h0LW1ha2Vsb3ZlLXZvbDIvcGhvdG9zLzAxLWluc3RhZ3JhbS1wb3N0LTcuanBnIiwiaW1hZ2VzL3Byb2plY3RzL2pvdXJuYWwtMjAyNi1vbmUtbmlnaHQtbWFrZWxvdmUtdm9sMi9waG90b3MvMDItaW5zdGFncmFtLXBvc3QtOS5qcGciXSwidGFncyI6WyJNdXNpYyIsIktPWkEgQkFTRUNBTVAiLCJBcmNhZGUgUmVzb3J0IE9raW5hd2EiLCJTZXNzaW9uIl0sInB1Ymxpc2hlZEF0IjoiMjAyNi0wNC0wNyIsImNyZWRpdHMiOnsiYmVhdCI6IkJhenpyb2FyIiwicmFwIjoiU0xJTSBCT1kgJiBMQVpaIiwicG93ZXJlZEJ5IjoiQ2lnbmFscyIsInBsYW5uaW5nIjoiS09aQSBCQVNFQ0FNUCAvIFl1a2kgTW90b211cmEiLCJkaXJlY3RvciI6Ill1a2kgTW90b211cmHvvIhGRUVMQk9NQu+8iSIsImRlc2lnbiI6Ik1FREFNQVlBS0kifX1dLCJkYXRhL3NlcnZpY2VzLmpzb24iOlt7ImlkIjoidHJhaW5pbmctcmV0cmVhdCIsIm51bWJlciI6IjAxIiwidGl0bGUiOiLkvIHmpa3noJTkv67jg7vlkIjlrr/jg5fjg63jgrDjg6njg6AiLCJlbiI6IkNvcnBvcmF0ZSBUcmFpbmluZyAmIFJldHJlYXQiLCJsZWFkIjoiS09aQSBCQVNFQ0FNUOOBqEFyY2FkZSBSZXNvcnQgT2tpbmF3YeOCkuihjOOBjeadpeOBl+OBquOBjOOCieOAgeihl+OCkuaVmeadkOOBq+ODgeODvOODoOOBruaEn+immuOCkuOBsuOCieOBj+OAgiIsInRleHQiOiLkvJrorbDlrqTjgaDjgZHjgafjga/nlJ/jgb7jgozjgarjgYTlr77oqbHjgpLjgIHjgrPjgrbjga7ooZfjg7vpn7Pmpb3jg7vlrr/ms4rjg7vliLbkvZzjgrnjgr/jgrjjgqrjga7nkrDlooPjgbjmjIHjgaHlh7rjgZfjgb7jgZnjgILml6XkuK3jga/ooZfmranjgY3jgoTjg5XjgqPjg7zjg6vjg4njg6/jg7zjgq/jgafllY/jgYTjgpLpm4bjgoHjgIHlpJzjga9CQVNFQ0FNUOOBp+iogOiRieOChOS8geeUu+OBuOe3qOmbhuOBmeOCi+OAgkNpZ25hbHPjga/jgIHnoJTkv67jga7oqK3oqIjjgYvjgonjg5XjgqHjgrfjg6rjg4bjg7zjgrfjg6fjg7PjgIHoqJjpjLLjgIHmiJDmnpznianljJbjgb7jgafkvLTotbDjgZfjgb7jgZnjgIIiLCJ0YXJnZXRzIjpbIue1jOWWtuODgeODvOODoOOChOaWsOimj+S6i+alreODgeODvOODoOOBruimluW6p+OCkuaPg+OBiOOBn+OBhCIsIuiLpeaJi+ODu+aWsOWNkuOBq+i2iuWig+S9k+mok+OBqOWIuua/gOOCkuS4juOBiOOBn+OBhCIsIumAmuW4uOOBruOCquODleOCteOCpOODiOWQiOWuv+OBp+OBr+eJqei2s+OCiuOBquOBhCIsIuaylue4hOODu+OCs+OCtuOBruaWh+WMluizh+a6kOOCkuS9v+OBo+OBn+eglOS/ruOCkuWun+aWveOBl+OBn+OBhCJdLCJwcmljZSI6IsKlMjAwLDAwMOOAnCAvIDEw5ZCN44O7M+aziuaDs+WumuOAguWuv+aziuODu+mjn+S6i+ODu+ODl+ODreOCsOODqeODoOioreioiOOBr+WIpemAlOOBiuimi+epjeOCiuOAgiIsImltYWdlIjoiaW1hZ2VzL3Byb2plY3RzL2pvdXJuYWwtMjAyNi1vbmUtbmlnaHQtbWFrZWxvdmUtdm9sMi9waG90b3MvMDEtaW5zdGFncmFtLXBvc3QtNy5qcGcifSx7ImlkIjoiY3JlYXRvci1yZXNpZGVuY2UiLCJudW1iZXIiOiIwMiIsInRpdGxlIjoi44Kv44Oq44Ko44Kk44K/44O85rue5Zyo44OX44Ot44Kw44Op44OgIiwiZW4iOiJDcmVhdG9yLWluLVJlc2lkZW5jZSIsImxlYWQiOiLmu57lnKjjgZnjgovjgIHmranjgY/jgIHoqbHjgZnjgIHjgaTjgY/jgovjgILjgrPjgrbjga7nqbrmsJfjgpLkvZzlk4HjgoTjg5bjg6njg7Pjg4njga7ntKDmnZDjgbjlpInjgYjjgovjgIIiLCJ0ZXh0IjoiQXJjYWRlIFJlc29ydCBPa2luYXdh44KS5rue5Zyo5oug54K544Gr44CBS09aQSBCQVNFQ0FNUOOCkuWItuS9nOaLoOeCueOBqOOBl+OBpue1hOOBv+WQiOOCj+OBm+OCi+OBk+OBqOOBp+OAgeefreacn+a7nuWcqOOBp+OCgua/g+OBhOOCouOCpuODiOODl+ODg+ODiOOCkueUn+OBv+WHuuOBl+OBvuOBmeOAgumfs+alveOAgeaYoOWDj+OAgeWGmeecn+OAgeODh+OCtuOCpOODs+OAgeaWh+eroOOBquOBqeOAgemgmOWfn+OCkuWVj+OCj+OBmuOAgeihl+OBqOaOpee2muOBl+OBn+WItuS9nOODl+ODreOCu+OCueOCkuioreioiOOBl+OBvuOBmeOAgiIsInRhcmdldHMiOlsi5LyB5qWt44OW44Op44Oz44OJ44Gu44OJ44Kt44Ol44Oh44Oz44K/44Oq44O844KEU05T57Sg5p2Q44KS44Gk44GP44KK44Gf44GEIiwi56S+5YaF44Kv44Oq44Ko44Kk44K/44O844Gr5aSW44Gu56m65rCX44KS5ZC444KP44Gb44Gf44GEIiwi5Zyw5Z+f44Go5o6l57aa44GX44Gf55m65L+h44O75L2c5ZOB5Yi25L2c44KS6KGM44GE44Gf44GEIiwi6KOc5Yqp6YeR44O75Yqp5oiQ6YeR44KS5rS755So44GX44Gf5paH5YyW5LyB55S744KS57WE44G/44Gf44GEIl0sInByaWNlIjoiMemAsemWk+OAnDPjg7bmnIggLyDopo/mqKHjg7vmnJ/plpPjg7vkurrmlbDjgavjgojjgorlpInli5XjgIIiLCJpbWFnZSI6ImltYWdlcy9wcm9qZWN0cy9qb3VybmFsLTIwMjYtb25lLW5pZ2h0LW1ha2Vsb3ZlLXZvbDIvcGhvdG9zLzAyLWluc3RhZ3JhbS1wb3N0LTkuanBnIn0seyJpZCI6ImNyZWF0aXZlLWV2ZW50IiwibnVtYmVyIjoiMDMiLCJ0aXRsZSI6IuWItuS9nOODu+OCpOODmeODs+ODiOODl+ODreODh+ODpeODvOOCuSIsImVuIjoiQ3JlYXRpdmUgJiBFdmVudCBQcm9kdWNlIiwibGVhZCI6IuS8geeUu+OBrueri+OBoeS4iuOBkuOBi+OCieOAgeePvuWgtOOBrueGseeLguOBqOiomOmMsuOBruioreioiOOBvuOBp+OAgiIsInRleHQiOiJLT1pBUk9DS1PjgoTjg5Hjg6vjg5/jg6nlpJzluILjga7jgojjgYbjgavjgIHooZfjgpLlt7vjgY3ovrzjgoDkvIHnlLvjgpLmp4vmg7PmrrXpmo7jgYvjgonlvaLjgavjgZfjgb7jgZnjgILjgqTjg5njg7Pjg4jpgYvllrbjgaDjgZHjgafjgarjgY/jgIHjgq3jg7zjg5Pjgrjjg6XjgqLjg6vjgIFXZWLjgIFTTlPjgIHmmKDlg4/jgIHoqJjpjLLjgIHjgrnjg53jg7PjgrXjg7zmj5DmoYjjgb7jgafjgIHjg5fjg63jgrjjgqfjgq/jg4jjgYznpL7kvJrjgavlsYrjgY/jgZ/jgoHjga7lsI7nt5rjgpLkuIDmsJfpgJrosqvjgafoqK3oqIjjgZfjgb7jgZnjgIIiLCJ0YXJnZXRzIjpbIuOCpOODmeODs+ODiOS8geeUu+ODu+mBi+WWtuOCkuS7u+OBm+OBn+OBhCIsIuaYoOWDj+ODu+OCsOODqeODleOCo+ODg+OCr+ODu1dlYuOBvuOBp+OBvuOBqOOCgeOBpuaVtOOBiOOBn+OBhCIsIuihjOaUv+WPl+iol+OChOijnOWKqemHkea0u+eUqOODl+ODreOCuOOCp+OCr+ODiOOCkumAsuOCgeOBn+OBhCIsIlNOU+OCs+ODs+ODhuODs+ODhOOChOOCs+ODn+ODpeODi+ODhuOCo+W9ouaIkOOBvuOBp+ebuOirh+OBl+OBn+OBhCJdLCJwcmljZSI6IuWGheWuueODu+imj+aooeOBq+W/nOOBmOOBpuWAi+WIpeimi+epjeOCguOCiuOAgiIsImltYWdlIjoiaW1hZ2VzL3Byb2plY3RzLzIwMjUta296YXJvY2tzLTIwMjUvcGhvdG9zLzAxLWRzYy02MzE3LmpwZyJ9XX0='), (char) => char.charCodeAt(0))));

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

const serviceDetail = (s) => `
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
      <a class="button arrow-button" href="contact.html">この内容で相談する <span aria-hidden="true">→</span></a>
    </div>
  </article>`;

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
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Cignalsお問い合わせ：${data.get('type') || ''}`);
    const body = encodeURIComponent([...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n'));
    thanks.hidden = false;
    window.location.href = `mailto:info@cignals.jp?subject=${subject}&body=${body}`;
  });
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
