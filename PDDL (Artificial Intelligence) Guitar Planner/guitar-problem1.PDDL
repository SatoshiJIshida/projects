(define (problem play-riff)
		(:domain guitar)

		(:objects

		Note - note

	    E1_E_Fret0 F1_E_Fret1 Gb1_E_Fret2 G1_E_Fret3 Ab1_E_Fret4 A1_E_Fret5 Bb1_E_Fret6 B1_E_Fret7 C1_E_Fret8 Db1_E_Fret9 D1_E_Fret10 Eb1_E_Fret11 E2_E_Fret12 F2_E_Fret13 Gb2_E_Fret14 G2_E_Fret15 Ab2_E_Fret16 A2_E_Fret17 Bb2_E_Fret18 B2_E_Fret19 C2_E_Fret20 Db2_E_Fret21 D2_E_Fret22 Eb2_E_Fret23 E3_E_Fret24

	    A1_A_Fret0 Bb1_A_Fret1 B1_A_Fret2 C1_A_Fret3 Db1_A_Fret4 D1_A_Fret5 Eb1_A_Fret6 E2_A_Fret7 F2_A_Fret8 Gb2_A_Fret9 G2_A_Fret10 Ab2_A_Fret11 A2_A_Fret12 Bb2_A_Fret13 B2_A_Fret14 C2_A_Fret15 Db2_A_Fret16 D2_A_Fret17 Eb2_A_Fret18 E3_A_Fret19 F3_A_Fret20 Gb3_A_Fret21 G3_A_Fret22 Ab3_A_Fret23 A3_A_Fret24

	    D1_D_Fret0 Eb1_D_Fret1 E2_D_Fret2 F2_D_Fret3 Gb2_D_Fret4 G2_D_Fret5 Ab2_D_Fret6 A2_D_Fret7 Bb2_D_Fret8 B2_D_Fret9 C2_D_Fret10 Db2_D_Fret11 D2_D_Fret12 Eb2_D_Fret13 E3_D_Fret14 F3_D_Fret15 Gb3_D_Fret16 G3_D_Fret17 Ab3_D_Fret18 A3_D_Fret19 Bb3_D_Fret20 B3_D_Fret21 C3_D_Fret22 Db3_D_Fret23 D3_D_Fret24

	    G2_G_Fret0 Ab2_G_Fret1 A2_G_Fret2 Bb2_G_Fret3 B2_G_Fret4 C2_G_Fret5 Db2_G_Fret6 D2_G_Fret7 Eb2_G_Fret8 E3_G_Fret9 F3_G_Fret10 Gb3_G_Fret11 G3_G_Fret12 Ab3_G_Fret13 A3_G_Fret14 Bb3_G_Fret15 B3_G_Fret16 C3_G_Fret17 Db3_G_Fret18 D3_G_Fret19 Eb3_G_Fret20 E4_G_Fret21 F4_G_Fret22 Gb4_G_Fret23 G4_G_Fret24

	  	B2_B_Fret0 C2_B_Fret1 Db2_B_Fret2 D2_B_Fret3 Eb2_B_Fret4 E3_B_Fret5 F3_B_Fret6 Gb3_B_Fret7 G3_B_Fret8 Ab3_B_Fret9 A3_B_Fret10 Bb3_B_Fret11 B3_B_Fret12 C3_B_Fret13 Db3_B_Fret14 D3_B_Fret15 Eb3_B_Fret16 E4_B_Fret17 F4_B_Fret18 Gb4_B_Fret19 G4_B_Fret20 Ab4_B_Fret21 A4_B_Fret22 Bb4_B_Fret23 B4_B_Fret24

	    E3_E2_Fret0 F3_E2_Fret1 Gb3_E2_Fret2 G3_E2_Fret3 Ab3_E2_Fret4 A3_E2_Fret5 Bb3_E2_Fret6 B3_E2_Fret7 C3_E2_Fret8 Db3_E2_Fret9 D3_E2_Fret10 Eb3_E2_Fret11 E4_E2_Fret12 F4_E2_Fret13 Gb4_E2_Fret14 G4_E2_Fret15 Ab4_E2_Fret16 A4_E2_Fret17 Bb4_E2_Fret18 B4_E2_Fret19 C4_E2_Fret20 Db4_E2_Fret21 D4_E2_Fret22 Eb4_E2_Fret23 E5_E2_Fret24 - fret

	    String6 String5 String4 String3 String2 String1 - string
)

(:init (music-note Note)

	   (fret-note E1_E_Fret0) (fret-note F1_E_Fret1) (fret-note Gb1_E_Fret2) (fret-note G1_E_Fret3) (fret-note Ab1_E_Fret4) (fret-note A1_E_Fret5) (fret-note Bb1_E_Fret6) (fret-note B1_E_Fret7) (fret-note C1_E_Fret8) (fret-note Db1_E_Fret9) (fret-note D1_E_Fret10) (fret-note Eb1_E_Fret11) (fret-note E2_E_Fret12) (fret-note F2_E_Fret13) (fret-note Gb2_E_Fret14) (fret-note G2_E_Fret15) (fret-note Ab2_E_Fret16) (fret-note A2_E_Fret17) (fret-note Bb2_E_Fret18) (fret-note B2_E_Fret19) (fret-note C2_E_Fret20) (fret-note Db2_E_Fret21) (fret-note D2_E_Fret22) (fret-note Eb2_E_Fret23) (fret-note E3_E_Fret24)

	   (fret-note A1_A_Fret0) (fret-note Bb1_A_Fret1) (fret-note B1_A_Fret2) (fret-note C1_A_Fret3) (fret-note Db1_A_Fret4) (fret-note D1_A_Fret5) (fret-note Eb1_A_Fret6) (fret-note E2_A_Fret7) (fret-note F2_A_Fret8) (fret-note Gb2_A_Fret9) (fret-note G2_A_Fret10) (fret-note Ab2_A_Fret11) (fret-note A2_A_Fret12) (fret-note Bb2_A_Fret13) (fret-note B2_A_Fret14) (fret-note C2_A_Fret15) (fret-note Db2_A_Fret16) (fret-note D2_A_Fret17) (fret-note Eb2_A_Fret18) (fret-note E3_A_Fret19) (fret-note F3_A_Fret20) (fret-note Gb3_A_Fret21) (fret-note G3_A_Fret22) (fret-note Ab3_A_Fret23) (fret-note A3_A_Fret24)

	   (fret-note D1_D_Fret0) (fret-note Eb1_D_Fret1) (fret-note E2_D_Fret2) (fret-note F2_D_Fret3) (fret-note Gb2_D_Fret4) (fret-note G2_D_Fret5) (fret-note Ab2_D_Fret6) (fret-note A2_D_Fret7) (fret-note Bb2_D_Fret8) (fret-note B2_D_Fret9) (fret-note C2_D_Fret10) (fret-note Db2_D_Fret11) (fret-note D2_D_Fret12) (fret-note Eb2_D_Fret13) (fret-note E3_D_Fret14) (fret-note F3_D_Fret15) (fret-note Gb3_D_Fret16) (fret-note G3_D_Fret17) (fret-note Ab3_D_Fret18) (fret-note A3_D_Fret19) (fret-note Bb3_D_Fret20) (fret-note B3_D_Fret21) (fret-note C3_D_Fret22) (fret-note Db3_D_Fret23) (fret-note D3_D_Fret24)

	   (fret-note G2_G_Fret0) (fret-note Ab2_G_Fret1) (fret-note A2_G_Fret2) (fret-note Bb2_G_Fret3) (fret-note B2_G_Fret4) (fret-note C2_G_Fret5) (fret-note Db2_G_Fret6) (fret-note D2_G_Fret7) (fret-note Eb2_G_Fret8) (fret-note E3_G_Fret9) (fret-note F3_G_Fret10) (fret-note Gb3_G_Fret11) (fret-note G3_G_Fret12) (fret-note Ab3_G_Fret13) (fret-note A3_G_Fret14) (fret-note Bb3_G_Fret15) (fret-note B3_G_Fret16) (fret-note C3_G_Fret17) (fret-note Db3_G_Fret18) (fret-note D3_G_Fret19) (fret-note Eb3_G_Fret20) (fret-note E4_G_Fret21) (fret-note F4_G_Fret22) (fret-note Gb4_G_Fret23) (fret-note G4_G_Fret24)

	   (fret-note B2_B_Fret0) (fret-note C2_B_Fret1) (fret-note Db2_B_Fret2) (fret-note D2_B_Fret3) (fret-note Eb2_B_Fret4) (fret-note E3_B_Fret5) (fret-note F3_B_Fret6) (fret-note Gb3_B_Fret7) (fret-note G3_B_Fret8) (fret-note Ab3_B_Fret9) (fret-note A3_B_Fret10) (fret-note Bb3_B_Fret11) (fret-note B3_B_Fret12) (fret-note C3_B_Fret13) (fret-note Db3_B_Fret14) (fret-note D3_B_Fret15) (fret-note Eb3_B_Fret16) (fret-note E4_B_Fret17) (fret-note F4_B_Fret18) (fret-note Gb4_B_Fret19) (fret-note G4_B_Fret20) (fret-note Ab4_B_Fret21) (fret-note A4_B_Fret22) (fret-note Bb4_B_Fret23) (fret-note B4_B_Fret24)

	   (fret-note E3_E2_Fret0) (fret-note F3_E2_Fret1) (fret-note Gb3_E2_Fret2) (fret-note G3_E2_Fret3) (fret-note Ab3_E2_Fret4) (fret-note A3_E2_Fret5) (fret-note Bb3_E2_Fret6) (fret-note B3_E2_Fret7) (fret-note C3_E2_Fret8) (fret-note Db3_E2_Fret9) (fret-note D3_E2_Fret10) (fret-note Eb3_E2_Fret11) (fret-note E4_E2_Fret12) (fret-note F4_E2_Fret13) (fret-note Gb4_E2_Fret14) (fret-note G4_E2_Fret15) (fret-note Ab4_E2_Fret16) (fret-note A4_E2_Fret17) (fret-note Bb4_E2_Fret18) (fret-note B4_E2_Fret19) (fret-note C4_E2_Fret20) (fret-note Db4_E2_Fret21) (fret-note D4_E2_Fret22) (fret-note Eb4_E2_Fret23) (fret-note E5_E2_Fret24)

	   (guitar-string String6) (guitar-string String5) (guitar-string String4)
	   (guitar-string String3) (guitar-string String2) (guitar-string String1)

	   (linked E1_E_Fret0 F1_E_Fret1 String6) (linked F1_E_Fret1 Gb1_E_Fret2 String6) (linked Gb1_E_Fret2 G1_E_Fret3 String6) (linked G1_E_Fret3 Ab1_E_Fret4 String6) (linked Ab1_E_Fret4 A1_E_Fret5 String6) (linked A1_E_Fret5 Bb1_E_Fret6 String6) (linked Bb1_E_Fret6 B1_E_Fret7 String6) (linked B1_E_Fret7 C1_E_Fret8 String6) (linked C1_E_Fret8 Db1_E_Fret9 String6) (linked Db1_E_Fret9 D1_E_Fret10 String6) (linked D1_E_Fret10 Eb1_E_Fret11 String6) (linked Eb1_E_Fret11 E2_E_Fret12 String6) (linked E2_E_Fret12 F2_E_Fret13 String6) (linked F2_E_Fret13 Gb2_E_Fret14 String6) (linked Gb2_E_Fret14 G2_E_Fret15 String6) (linked G2_E_Fret15 Ab2_E_Fret16 String6) (linked Ab2_E_Fret16 A2_E_Fret17 String6) (linked A2_E_Fret17 Bb2_E_Fret18 String6) (linked Bb2_E_Fret18 B2_E_Fret19 String6) (linked B2_E_Fret19 C2_E_Fret20 String6) (linked C2_E_Fret20 Db2_E_Fret21 String6) (linked Db2_E_Fret21 D2_E_Fret22 String6) (linked D2_E_Fret22 Eb2_E_Fret23 String6) (linked Eb2_E_Fret23 E3_E_Fret24 String6)

	   (linked A1_A_Fret0 Bb1_A_Fret1 String5) (linked Bb1_A_Fret1 B1_A_Fret2 String5) (linked B1_A_Fret2 C1_A_Fret3 String5) (linked C1_A_Fret3 Db1_A_Fret4 String5) (linked Db1_A_Fret4 D1_A_Fret5 String5) (linked D1_A_Fret5 Eb1_A_Fret6 String5) (linked Eb1_A_Fret6 E2_A_Fret7 String5) (linked E2_A_Fret7 F2_A_Fret8 String5) (linked F2_A_Fret8 Gb2_A_Fret9 String5) (linked Gb2_A_Fret9 G2_A_Fret10 String5) (linked G2_A_Fret10 Ab2_A_Fret11 String5) (linked Ab2_A_Fret11 A2_A_Fret12 String5) (linked A2_A_Fret12 Bb2_A_Fret13 String5) (linked Bb2_A_Fret13 B2_A_Fret14 String5) (linked B2_A_Fret14 C2_A_Fret15 String5) (linked C2_A_Fret15 Db2_A_Fret16 String5) (linked Db2_A_Fret16 D2_A_Fret17 String5) (linked D2_A_Fret17 Eb2_A_Fret18 String5) (linked Eb2_A_Fret18 E3_A_Fret19 String5) (linked E3_A_Fret19 F3_A_Fret20 String5) (linked F3_A_Fret20 Gb3_A_Fret21 String5) (linked Gb3_A_Fret21 G3_A_Fret22 String5) (linked G3_A_Fret22 Ab3_A_Fret23 String5) (linked Ab3_A_Fret23 A3_A_Fret24 String5)

	   (linked D1_D_Fret0 Eb1_D_Fret1 String4) (linked Eb1_D_Fret1 E2_D_Fret2 String4) (linked E2_D_Fret2 F2_D_Fret3 String4) (linked F2_D_Fret3 Gb2_D_Fret4 String4) (linked Gb2_D_Fret4 G2_D_Fret5 String4) (linked G2_D_Fret5 Ab2_D_Fret6 String4) (linked Ab2_D_Fret6 A2_D_Fret7 String4) (linked A2_D_Fret7 Bb2_D_Fret8 String4) (linked Bb2_D_Fret8 B2_D_Fret9 String4) (linked B2_D_Fret9 C2_D_Fret10 String4) (linked C2_D_Fret10 Db2_D_Fret11 String4) (linked Db2_D_Fret11 D2_D_Fret12 String4) (linked D2_D_Fret12 Eb2_D_Fret13 String4) (linked Eb2_D_Fret13 E3_D_Fret14 String4) (linked E3_D_Fret14 F3_D_Fret15 String4) (linked F3_D_Fret15 Gb3_D_Fret16 String4) (linked Gb3_D_Fret16 G3_D_Fret17 String4) (linked G3_D_Fret17 Ab3_D_Fret18 String4) (linked Ab3_D_Fret18 A3_D_Fret19 String4) (linked A3_D_Fret19 Bb3_D_Fret20 String4) (linked Bb3_D_Fret20 B3_D_Fret21 String4) (linked B3_D_Fret21 C3_D_Fret22 String4) (linked C3_D_Fret22 Db3_D_Fret23 String4) (linked Db3_D_Fret23 D3_D_Fret24 String4)

	   (linked G2_G_Fret0 Ab2_G_Fret1 String3) (linked Ab2_G_Fret1 A2_G_Fret2 String3) (linked A2_G_Fret2 Bb2_G_Fret3 String3) (linked Bb2_G_Fret3 B2_G_Fret4 String3) (linked B2_G_Fret4 C2_G_Fret5 String3) (linked C2_G_Fret5 Db2_G_Fret6 String3) (linked Db2_G_Fret6 D2_G_Fret7 String3) (linked D2_G_Fret7 Eb2_G_Fret8 String3) (linked Eb2_G_Fret8 E3_G_Fret9 String3) (linked E3_G_Fret9 F3_G_Fret10 String3) (linked F3_G_Fret10 Gb3_G_Fret11 String3) (linked Gb3_G_Fret11 G3_G_Fret12  String3) (linked G3_G_Fret12 Ab3_G_Fret13 String3) (linked Ab3_G_Fret13 A3_G_Fret14 String3) (linked A3_G_Fret14 Bb3_G_Fret15 String3) (linked Bb3_G_Fret15 B3_G_Fret16 String3) (linked B3_G_Fret16 C3_G_Fret17 String3) (linked C3_G_Fret17 Db3_G_Fret18 String3) (linked Db3_G_Fret18 D3_G_Fret19 String3) (linked D3_G_Fret19 Eb3_G_Fret20 String3) (linked Eb3_G_Fret20 E4_G_Fret21 String3) (linked E4_G_Fret21 F4_G_Fret22 String3) (linked F4_G_Fret22 Gb4_G_Fret23 String3) (linked Gb4_G_Fret23 G4_G_Fret24 String3)

	   (linked B2_B_Fret0 C2_B_Fret1 String2) (linked C2_B_Fret1 Db2_B_Fret2 String2) (linked Db2_B_Fret2 D2_B_Fret3 String2) (linked D2_B_Fret3 Eb2_B_Fret4 String2) (linked Eb2_B_Fret4 E3_B_Fret5 String2) (linked E3_B_Fret5 F3_B_Fret6 String2) (linked F3_B_Fret6 Gb3_B_Fret7 String2) (linked Gb3_B_Fret7 G3_B_Fret8 String2) (linked G3_B_Fret8 Ab3_B_Fret9 String2) (linked Ab3_B_Fret9 A3_B_Fret10 String2) (linked A3_B_Fret10 Bb3_B_Fret11 String2) (linked Bb3_B_Fret11 B3_B_Fret12 String2) (linked B3_B_Fret12 C3_B_Fret13 String2) (linked C3_B_Fret13 Db3_B_Fret14 String2) (linked Db3_B_Fret14 D3_B_Fret15 String2) (linked D3_B_Fret15 Eb3_B_Fret16 String2) (linked Eb3_B_Fret16 E4_B_Fret17 String2) (linked E4_B_Fret17 F4_B_Fret18 String2) (linked F4_B_Fret18 Gb4_B_Fret19 String2) (linked Gb4_B_Fret19 G4_B_Fret20 String2) (linked G4_B_Fret20 Ab4_B_Fret21 String2) (linked Ab4_B_Fret21 A4_B_Fret22 String2) (linked A4_B_Fret22 Bb4_B_Fret23 String2) (linked Bb4_B_Fret23 B4_B_Fret24 String2)

	   (linked E3_E2_Fret0 F3_E2_Fret1 String1) (linked F3_E2_Fret1 Gb3_E2_Fret2 String1) (linked Gb3_E2_Fret2 G3_E2_Fret3 String1) (linked G3_E2_Fret3 Ab3_E2_Fret4 String1) (linked Ab3_E2_Fret4 A3_E2_Fret5 String1) (linked A3_E2_Fret5 Bb3_E2_Fret6 String1) (linked Bb3_E2_Fret6 B3_E2_Fret7 String1) (linked B3_E2_Fret7 C3_E2_Fret8 String1) (linked C3_E2_Fret8 Db3_E2_Fret9 String1) (linked Db3_E2_Fret9 D3_E2_Fret10 String1) (linked D3_E2_Fret10 Eb3_E2_Fret11 String1) (linked Eb3_E2_Fret11 E4_E2_Fret12 String1) (linked E4_E2_Fret12 F4_E2_Fret13 String1) (linked F4_E2_Fret13 Gb4_E2_Fret14 String1) (linked Gb4_E2_Fret14 G4_E2_Fret15 String1) (linked G4_E2_Fret15 Ab4_E2_Fret16 String1) (linked Ab4_E2_Fret16 A4_E2_Fret17 String1) (linked A4_E2_Fret17 Bb4_E2_Fret18 String1) (linked Bb4_E2_Fret18 B4_E2_Fret19 String1) (linked B4_E2_Fret19 C4_E2_Fret20 String1) (linked C4_E2_Fret20 Db4_E2_Fret21 String1) (linked Db4_E2_Fret21 D4_E2_Fret22  String1) (linked D4_E2_Fret22 Eb4_E2_Fret23 String1) (linked Eb4_E2_Fret23 E5_E2_Fret24 String1)

	   (at-fret E1_E_Fret0 String6) (at-fret F1_E_Fret1 String6) (at-fret Gb1_E_Fret2 String6) (at-fret G1_E_Fret3 String6) (at-fret Ab1_E_Fret4 String6) (at-fret A1_E_Fret5 String6) (at-fret Bb1_E_Fret6 String6) (at-fret B1_E_Fret7 String6) (at-fret C1_E_Fret8 String6) (at-fret Db1_E_Fret9 String6) (at-fret D1_E_Fret10 String6) (at-fret Eb1_E_Fret11 String6) (at-fret E2_E_Fret12 String6) (at-fret F2_E_Fret13 String6) (at-fret Gb2_E_Fret14 String6) (at-fret G2_E_Fret15 String6) (at-fret Ab2_E_Fret16 String6) (at-fret A2_E_Fret17 String6) (at-fret Bb2_E_Fret18 String6) (at-fret B2_E_Fret19 String6) (at-fret C2_E_Fret20 String6) (at-fret Db2_E_Fret21 String6) (at-fret D2_E_Fret22 String6) (at-fret Eb2_E_Fret23 String6) (at-fret E3_E_Fret24 String6)

	   (at-fret A1_A_Fret0 String5) (at-fret Bb1_A_Fret1 String5) (at-fret B1_A_Fret2 String5) (at-fret C1_A_Fret3 String5) (at-fret Db1_A_Fret4 String5) (at-fret D1_A_Fret5 String5) (at-fret Eb1_A_Fret6 String5) (at-fret E2_A_Fret7 String5) (at-fret F2_A_Fret8 String5) (at-fret Gb2_A_Fret9 String5) (at-fret G2_A_Fret10 String5) (at-fret Ab2_A_Fret11 String5) (at-fret A2_A_Fret12 String5) (at-fret Bb2_A_Fret13 String5) (at-fret B2_A_Fret14 String5) (at-fret C2_A_Fret15 String5) (at-fret Db2_A_Fret16 String5) (at-fret D2_A_Fret17 String5) (at-fret Eb2_A_Fret18 String5) (at-fret E3_A_Fret19 String5) (at-fret F3_A_Fret20 String5) (at-fret Gb3_A_Fret21 String5) (at-fret G3_A_Fret22 String5) (at-fret Ab3_A_Fret23 String5) (at-fret A3_A_Fret24 String5)

	   (at-fret D1_D_Fret0 String4) (at-fret Eb1_D_Fret1 String4) (at-fret E2_D_Fret2 String4) (at-fret F2_D_Fret3 String4) (at-fret Gb2_D_Fret4 String4) (at-fret G2_D_Fret5 String4) (at-fret Ab2_D_Fret6 String4) (at-fret A2_D_Fret7 String4) (at-fret Bb2_D_Fret8 String4) (at-fret B2_D_Fret9 String4) (at-fret C2_D_Fret10 String4) (at-fret Db2_D_Fret11 String4) (at-fret D2_D_Fret12 String4) (at-fret Eb2_D_Fret13 String4) (at-fret E3_D_Fret14 String4) (at-fret F3_D_Fret15 String4) (at-fret Gb3_D_Fret16 String4) (at-fret G3_D_Fret17 String4) (at-fret Ab3_D_Fret18 String4) (at-fret A3_D_Fret19 String4) (at-fret Bb3_D_Fret20 String4) (at-fret B3_D_Fret21 String4) (at-fret C3_D_Fret22 String4) (at-fret Db3_D_Fret23 String4) (at-fret D3_D_Fret24 String4)

	   (at-fret G2_G_Fret0 String3) (at-fret Ab2_G_Fret1 String3) (at-fret A2_G_Fret2 String3) (at-fret Bb2_G_Fret3 String3) (at-fret B2_G_Fret4 String3) (at-fret C2_G_Fret5 String3) (at-fret Db2_G_Fret6 String3) (at-fret D2_G_Fret7 String3) (at-fret Eb2_G_Fret8 String3) (at-fret E3_G_Fret9 String3) (at-fret F3_G_Fret10 String3) (at-fret Gb3_G_Fret11 String3) (at-fret G3_G_Fret12 String3) (at-fret Ab3_G_Fret13 String3) (at-fret A3_G_Fret14 String3) (at-fret Bb3_G_Fret15 String3) (at-fret B3_G_Fret16 String3) (at-fret C3_G_Fret17 String3) (at-fret Db3_G_Fret18 String3) (at-fret D3_G_Fret19 String3) (at-fret Eb3_G_Fret20 String3) (at-fret E4_G_Fret21 String3) (at-fret F4_G_Fret22 String3) (at-fret Gb4_G_Fret23 String3) (at-fret G4_G_Fret24 String3)

	   (at-fret B2_B_Fret0 String2) (at-fret C2_B_Fret1 String2) (at-fret Db2_B_Fret2 String2) (at-fret D2_B_Fret3 String2) (at-fret Eb2_B_Fret4 String2) (at-fret E3_B_Fret5 String2) (at-fret F3_B_Fret6 String2) (at-fret Gb3_B_Fret7 String2) (at-fret G3_B_Fret8 String2) (at-fret Ab3_B_Fret9 String2) (at-fret A3_B_Fret10 String2) (at-fret Bb3_B_Fret11 String2) (at-fret B3_B_Fret12 String2) (at-fret C3_B_Fret13 String2) (at-fret Db3_B_Fret14 String2) (at-fret D3_B_Fret15 String2) (at-fret Eb3_B_Fret16 String2) (at-fret E4_B_Fret17 String2) (at-fret F4_B_Fret18 String2) (at-fret Gb4_B_Fret19 String2) (at-fret G4_B_Fret20 String2) (at-fret Ab4_B_Fret21 String2) (at-fret A4_B_Fret22 String2) (at-fret Bb4_B_Fret23 String2) (at-fret B4_B_Fret24 String2)

	   (at-fret E3_E2_Fret0 String1) (at-fret F3_E2_Fret1 String1) (at-fret Gb3_E2_Fret2 String1) (at-fret G3_E2_Fret3 String1) (at-fret Ab3_E2_Fret4 String1) (at-fret A3_E2_Fret5 String1) (at-fret Bb3_E2_Fret6 String1) (at-fret B3_E2_Fret7 String1) (at-fret C3_E2_Fret8 String1) (at-fret Db3_E2_Fret9 String1) (at-fret D3_E2_Fret10 String1) (at-fret Eb3_E2_Fret11 String1) (at-fret E4_E2_Fret12 String1) (at-fret F4_E2_Fret13 String1) (at-fret Gb4_E2_Fret14 String1) (at-fret G4_E2_Fret15 String1) (at-fret Ab4_E2_Fret16 String1) (at-fret A4_E2_Fret17 String1) (at-fret Bb4_E2_Fret18 String1) (at-fret B4_E2_Fret19 String1) (at-fret C4_E2_Fret20 String1) (at-fret Db4_E2_Fret21 String1) (at-fret D4_E2_Fret22 String1) (at-fret Eb4_E2_Fret23 String1) (at-fret E5_E2_Fret24 String1)

	   (=(move E1_E_Fret0 F1_E_Fret1)0.1)
	   (=(move F1_E_Fret1 Gb1_E_Fret2)0.1)
	   (=(move Gb1_E_Fret2 G1_E_Fret3)0.1)
	   (=(move G1_E_Fret3 Ab1_E_Fret4)0.1)
	   (=(move Ab1_E_Fret4 A1_E_Fret5)0.1)
	   (=(move A1_E_Fret5 Bb1_E_Fret6)0.1)
	   (=(move Bb1_E_Fret6 B1_E_Fret7)0.1)
	   (=(move B1_E_Fret7 C1_E_Fret8)0.1)
	   (=(move C1_E_Fret8 Db1_E_Fret9)0.1)
	   (=(move Db1_E_Fret9 D1_E_Fret10)0.1)
	   (=(move D1_E_Fret10 Eb1_E_Fret11)0.1)
	   (=(move Eb1_E_Fret11 E2_E_Fret12)0.1)
	   (=(move E2_E_Fret12 F2_E_Fret13)0.1)
	   (=(move F2_E_Fret13 Gb2_E_Fret14)0.2)
	   (=(move Gb2_E_Fret14 G2_E_Fret15)0.2)
	   (=(move G2_E_Fret15 Ab2_E_Fret16)0.2)
	   (=(move Ab2_E_Fret16 A2_E_Fret17)0.2)
	   (=(move A2_E_Fret17 Bb2_E_Fret18)0.2)
	   (=(move Bb2_E_Fret18 B2_E_Fret19)0.2)
	   (=(move B2_E_Fret19 C2_E_Fret20)0.2)
	   (=(move C2_E_Fret20 Db2_E_Fret21)0.3)
	   (=(move Db2_E_Fret21 D2_E_Fret22)0.3)
	   (=(move D2_E_Fret22 Eb2_E_Fret23)0.3)
	   (=(move Eb2_E_Fret23 E3_E_Fret24)0.3)

	   (=(move A1_A_Fret0 Bb1_A_Fret1)0.1)
	   (=(move Bb1_A_Fret1 B1_A_Fret2)0.1)
	   (=(move B1_A_Fret2 C1_A_Fret3)0.1)
	   (=(move C1_A_Fret3 Db1_A_Fret4)0.1)
	   (=(move Db1_A_Fret4 D1_A_Fret5)0.1)
	   (=(move D1_A_Fret5 Eb1_A_Fret6)0.1)
	   (=(move Eb1_A_Fret6 E2_A_Fret7)0.1)
	   (=(move E2_A_Fret7 F2_A_Fret8)0.1)
	   (=(move F2_A_Fret8 Gb2_A_Fret9)0.1)
	   (=(move Gb2_A_Fret9 G2_A_Fret10)0.1)
	   (=(move G2_A_Fret10 Ab2_A_Fret11)0.1)
	   (=(move Ab2_A_Fret11 A2_A_Fret12)0.1)
	   (=(move A2_A_Fret12 Bb2_A_Fret13)0.1)
	   (=(move Bb2_A_Fret13 B2_A_Fret14)0.2)
	   (=(move B2_A_Fret14 C2_A_Fret15)0.2)
	   (=(move C2_A_Fret15 Db2_A_Fret16)0.2)
	   (=(move Db2_A_Fret16 D2_A_Fret17)0.2)
	   (=(move D2_A_Fret17 Eb2_A_Fret18)0.2)
	   (=(move Eb2_A_Fret18 E3_A_Fret19)0.2)
	   (=(move E3_A_Fret19 F3_A_Fret20)0.2)
	   (=(move F3_A_Fret20 Gb3_A_Fret21)0.3)
	   (=(move Gb3_A_Fret21 G3_A_Fret22)0.3)
	   (=(move G3_A_Fret22 Ab3_A_Fret23)0.3)
	   (=(move Ab3_A_Fret23 A3_A_Fret24)0.3)

	   (=(move D1_D_Fret0 Eb1_D_Fret1)0.1)
	   (=(move Eb1_D_Fret1 E2_D_Fret2)0.1)
	   (=(move E2_D_Fret2 F2_D_Fret3)0.1)
	   (=(move F2_D_Fret3 Gb2_D_Fret4)0.1)
	   (=(move Gb2_D_Fret4 G2_D_Fret5)0.1)
	   (=(move G2_D_Fret5 Ab2_D_Fret6)0.1)
	   (=(move Ab2_D_Fret6 A2_D_Fret7)0.1)
	   (=(move A2_D_Fret7 Bb2_D_Fret8)0.1)
	   (=(move Bb2_D_Fret8 B2_D_Fret9)0.1)
	   (=(move B2_D_Fret9 C2_D_Fret10)0.1)
	   (=(move C2_D_Fret10 Db2_D_Fret11)0.1)
	   (=(move Db2_D_Fret11 D2_D_Fret12)0.1)
	   (=(move D2_D_Fret12 Eb2_D_Fret13)0.1)
	   (=(move Eb2_D_Fret13 E3_D_Fret14)0.2)
	   (=(move E3_D_Fret14 F3_D_Fret15)0.2)
	   (=(move F3_D_Fret15 Gb3_D_Fret16)0.2)
	   (=(move Gb3_D_Fret16 G3_D_Fret17)0.2)
	   (=(move G3_D_Fret17 Ab3_D_Fret18)0.2)
	   (=(move Ab3_D_Fret18 A3_D_Fret19)0.2)
	   (=(move A3_D_Fret19 Bb3_D_Fret20)0.2)
	   (=(move Bb3_D_Fret20 B3_D_Fret21)0.3)
	   (=(move B3_D_Fret21 C3_D_Fret22)0.3)
	   (=(move C3_D_Fret22 Db3_D_Fret23)0.3)
	   (=(move Db3_D_Fret23 D3_D_Fret24)0.3)

	   (=(move G2_G_Fret0 Ab2_G_Fret1)0.1)
	   (=(move Ab2_G_Fret1 A2_G_Fret2)0.1)
	   (=(move A2_G_Fret2 Bb2_G_Fret3)0.1)
	   (=(move Bb2_G_Fret3 B2_G_Fret4)0.1)
	   (=(move B2_G_Fret4 C2_G_Fret5)0.1)
	   (=(move C2_G_Fret5 Db2_G_Fret6)0.1)
	   (=(move Db2_G_Fret6 D2_G_Fret7)0.1)
	   (=(move D2_G_Fret7 Eb2_G_Fret8)0.1)
	   (=(move Eb2_G_Fret8 E3_G_Fret9)0.1)
	   (=(move E3_G_Fret9 F3_G_Fret10)0.1)
	   (=(move F3_G_Fret10 Gb3_G_Fret11)0.1)
	   (=(move Gb3_G_Fret11 G3_G_Fret12)0.1)
	   (=(move G3_G_Fret12 Ab3_G_Fret13)0.1)
	   (=(move Ab3_G_Fret13 A3_G_Fret14)0.2)
	   (=(move A3_G_Fret14 Bb3_G_Fret15)0.2)
	   (=(move Bb3_G_Fret15 B3_G_Fret16)0.2)
	   (=(move B3_G_Fret16 C3_G_Fret17)0.2)
	   (=(move C3_G_Fret17 Db3_G_Fret18)0.2)
	   (=(move Db3_G_Fret18 D3_G_Fret19)0.2)
	   (=(move D3_G_Fret19 Eb3_G_Fret20)0.2)
	   (=(move Eb3_G_Fret20 E4_G_Fret21)0.3)
	   (=(move E4_G_Fret21 F4_G_Fret22)0.3)
	   (=(move F4_G_Fret22 Gb4_G_Fret23)0.3)
	   (=(move Gb4_G_Fret23 G4_G_Fret24)0.3)

	   (=(move B2_B_Fret0 C2_B_Fret1)0.1)
	   (=(move C2_B_Fret1 Db2_B_Fret2)0.1)
	   (=(move Db2_B_Fret2 D2_B_Fret3)0.1)
	   (=(move D2_B_Fret3 Eb2_B_Fret4)0.1)
	   (=(move Eb2_B_Fret4 E3_B_Fret5)0.1)
	   (=(move E3_B_Fret5 F3_B_Fret6)0.1)
	   (=(move F3_B_Fret6 Gb3_B_Fret7)0.1)
	   (=(move Gb3_B_Fret7 G3_B_Fret8)0.1)
	   (=(move G3_B_Fret8 Ab3_B_Fret9)0.1)
	   (=(move Ab3_B_Fret9 A3_B_Fret10)0.1)
	   (=(move A3_B_Fret10 Bb3_B_Fret11)0.1)
	   (=(move Bb3_B_Fret11 B3_B_Fret12)0.1)
	   (=(move B3_B_Fret12 C3_B_Fret13)0.1)
	   (=(move C3_B_Fret13 Db3_B_Fret14)0.2)
	   (=(move Db3_B_Fret14 D3_B_Fret15)0.2)
	   (=(move D3_B_Fret15 Eb3_B_Fret16)0.2)
	   (=(move Eb3_B_Fret16 E4_B_Fret17)0.2)
	   (=(move E4_B_Fret17 F4_B_Fret18)0.2)
	   (=(move F4_B_Fret18 Gb4_B_Fret19)0.2)
	   (=(move Gb4_B_Fret19 G4_B_Fret20)0.2)
	   (=(move G4_B_Fret20 Ab4_B_Fret21)0.3)
	   (=(move Ab4_B_Fret21 A4_B_Fret22)0.3)
	   (=(move A4_B_Fret22 Bb4_B_Fret23)0.3)
	   (=(move Bb4_B_Fret23 B4_B_Fret24)0.3)

	   (=(move E3_E2_Fret0 F3_E2_Fret1)0.1)
	   (=(move F3_E2_Fret1 Gb3_E2_Fret2)0.1)
	   (=(move Gb3_E2_Fret2 G3_E2_Fret3)0.1)
	   (=(move G3_E2_Fret3 Ab3_E2_Fret4)0.1)
	   (=(move Ab3_E2_Fret4 A3_E2_Fret5)0.1)
	   (=(move A3_E2_Fret5 Bb3_E2_Fret6)0.1)
	   (=(move Bb3_E2_Fret6 B3_E2_Fret7)0.1)
	   (=(move B3_E2_Fret7 C3_E2_Fret8)0.1)
	   (=(move C3_E2_Fret8 Db3_E2_Fret9)0.1)
	   (=(move Db3_E2_Fret9 D3_E2_Fret10)0.1)
	   (=(move D3_E2_Fret10 Eb3_E2_Fret11)0.1)
	   (=(move Eb3_E2_Fret11 E4_E2_Fret12)0.1)
	   (=(move E4_E2_Fret12 F4_E2_Fret13)0.1)
	   (=(move F4_E2_Fret13 Gb4_E2_Fret14)0.2)
	   (=(move Gb4_E2_Fret14 G4_E2_Fret15)0.2)
	   (=(move G4_E2_Fret15 Ab4_E2_Fret16)0.2)
	   (=(move Ab4_E2_Fret16 A4_E2_Fret17)0.2)
	   (=(move A4_E2_Fret17 Bb4_E2_Fret18)0.2)
	   (=(move Bb4_E2_Fret18 B4_E2_Fret19)0.2)
	   (=(move B4_E2_Fret19 C4_E2_Fret20)0.2)
	   (=(move C4_E2_Fret20 Db4_E2_Fret21)0.3)
	   (=(move Db4_E2_Fret21 D4_E2_Fret22)0.3)
	   (=(move D4_E2_Fret22 Eb4_E2_Fret23)0.3)
	   (=(move Eb4_E2_Fret23 E5_E2_Fret24)0.3)

	   (at-note E1_E_Fret0)
	   (at-note-n E1_E_Fret0 String6)
)

(:goal (and

	   (at-note E3_E_Fret24)

))
)