
	function pokazgodziny()
		{
					
				var dzisiaj = new Date();
				
				var days = ["NIEDZIELA", "PONIEDZIAŁEK", "WTOREK", "ŚRODA", "CZWARTEK", "PIĄTEK", "SOBOTA"];
				var hours = ["CZYNNE: 10:00 - 2:00 W NOCY", "CZYNNE: 16:00 - 2:00 W NOCY", "CZYNNE: 16:00 - 2:00 W NOCY", "CZYNNE: 16:00 - 2:00 W NOCY", "CZYNNE: 16:00 - 2:00 W NOCY", "CZYNNE: 16:00 - 3:00 W NOCY", "CZYNNE: 10:00 - 3:00 W NOCY"];
				
				if (dzisiaj.getHours() < 6 )
				{
					document.getElementById("dzien").innerHTML = days[(dzisiaj.getDay()-1)];
					document.getElementById("godziny").innerHTML = hours[(dzisiaj.getDay()-1)];
					
				}
				else
				{
					document.getElementById("dzien").innerHTML = days[dzisiaj.getDay()];
					document.getElementById("godziny").innerHTML = hours[dzisiaj.getDay()];
					
				}	
				
				
				
				
				
				
				
				
				
				
		
		
		}
		