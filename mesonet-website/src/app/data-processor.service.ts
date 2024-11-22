// src/app/data-processor.service.ts
export interface Measurement {
    timestamp: string;
    station_id: string;
    variable: string;
    value: string;
    flag: number;
}

export class DataProcessorService {
    static extractValues(data: Measurement[]): { rainfall: string | undefined; temperature: string | undefined; timestamp: string | undefined } {
        let rainfall: string | undefined;
        let temperature: string | undefined;
        let timestamp: string | undefined;

        data.forEach((measurement) => {
            if (measurement.variable === 'RF_1_Tot300s') {
                rainfall = measurement.value;
                timestamp = measurement.timestamp; // Capture the timestamp of the rainfall
            } else if (measurement.variable === 'Tair_1_Avg') {
                temperature = measurement.value;
                timestamp = measurement.timestamp; // Capture the timestamp of the temperature
            }
        });

        return { rainfall, temperature, timestamp };
    }
}
