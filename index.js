PS3="Please select your choice: "
CHOICE=("Ubuntu" "Debian" "Raspbian" "CentOS" "Exit")
select CHC in "${CHOICE[@]}"
do
	case $CHC in
		"Ubuntu")
				#define distribution
				DIST="ubuntu"

				#make scripts directory
				mkdir -v $HOME/scripts

				wget $SCRIPT_DL_URL/$DIST/$DIST-install.sh -P $HOME
				source $HOME/$DIST-install.sh
				rm -f -v $HOME/$DIST-install.sh
				rm -f -v $HOME/linux-install.sh

				#do we want to reboot the system
				read -r -p "All done! Do you want to reboot? (Y/N) " ANSWER
				echo
				if [[ $ANSWER =~ ^([yY])$ ]]
				then
					shutdown -r 1 Press CTRL+C to abort.
				fi

				#we are done. exit the script
				exit
			;;
		"Debian")
				#define distribution
				DIST="debian"

				#make scripts directory
				mkdir -v $HOME/scripts

				wget $SCRIPT_DL_URL/$DIST/$DIST-install.sh -P $HOME
				source $HOME/$DIST-install.sh
				rm -f -v $HOME/$DIST-install.sh
				rm -f -v $HOME/linux-install.sh

				#do we want to reboot the system
				read -r -p "All done! Do you want to reboot? (Y/N) " ANSWER
				echo
				if [[ $ANSWER =~ ^([yY])$ ]]
				then
					shutdown -r 1 Press CTRL+C to abort.
				fi

				#we are done. exit the script
				exit
			;;
		"Raspbian")
