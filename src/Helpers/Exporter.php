<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

class Exporter
{
    /**
     * @param mixed  $list
     * @param string $fileName
     *
     * @return [downloadble file]
     */
    public static function jsonExport($list, $fileName = 'export')
    {
        // File name
        $fileName = $fileName.'.json';
        // Open the file to create the csv
        $fp = fopen($fileName, 'w');

        fwrite($fp, json_encode($list));

        // csv logic end here
        fclose($fp);

        return self::forceDownload($fileName, 'json');
    }

    /**
     * @param mixed  $list
     * @param string $fileName
     *
     * @return [downloadble file]
     */
    public static function csvExport($list, $fileName = 'export')
    {
        // File name
        $fileName = $fileName.'.csv';
        // Open the file to create the csv
        $fp = fopen($fileName, 'w');

        // The header arry
        $header = [];
        // Csv logic start here
        // Header
        foreach ($list[0]->toArray() as $key => $data) {
            array_push($header, $key);
        }
        fputcsv($fp, $header);

        // Values
        foreach ($list as $value) {
            $tempArray = [];
            foreach ($value->toArray() as $key => $tempValue) {
                $tempArray[] = $tempValue;
            }
            fputcsv($fp, $tempArray);
        }
        // Csv logic end here
        fclose($fp);

        return self::forceDownload($fileName);
    }

    /**
     * @param mixed  $fileName
     * @param string $type
     *
     * @return [return the file type]
     */
    public static function forceDownload($fileName, $type = 'csv')
    {
        // here force the broser to download the file
        $pathToFile = public_path($fileName);

        $name = $fileName;

        $headers = ['Content-Type: application/'.$type];

        return response()->download($pathToFile, $name, $headers);
    }
}
