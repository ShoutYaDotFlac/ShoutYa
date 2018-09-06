import React, { Component } from 'react';
import {ScrollView, Text} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

	render() {
		return (
			<Agenda
				items={this.state.items}
				loadItemsForMonth={this.loadItems.bind(this)}
				selected={"2017-05-16"}
				renderItem={this.renderItem.bind(this)}
				renderEmptyDate={this.renderEmptyDate.bind(this)}
				rowHasChanged={this.rowHasChanged.bind(this)}
        pastScrollRange={0}
        futureScrollRange={0}
			/>
		);
	}

	loadItems(day) {
		setTimeout(() => {
			for (let i = 0; i < 2; i++) {
				const time = day.timestamp + i * 24 * 60 * 60 * 1000;
				const strTime = this.timeToString(time);
				if (!this.state.items[strTime]) {
					this.state.items[strTime] = [];
					const numItems = Math.floor(Math.random() * 5);
					for (let j = 0; j < numItems; j++) {
            if (j%2===0){
              var stringJob = "CATERING";
              }else{
               stringJob = "CLEANING"
              }

						this.state.items[strTime].push({


              name: "Job for " + strTime +'\n\n'+stringJob,
							height: Math.max(50, Math.floor(Math.random() * 150))
						});
					}
				}
			}
			console.log(this.state.items);

			const newItems = {};
			Object.keys(this.state.items).forEach(key => {
				newItems[key] = this.state.items[key];
			});
			this.setState({
				items: newItems
			});
		}, 1000);
		// console.log(`Load Items for ${day.year}-${day.month}`);
	}


    );
  }
}
