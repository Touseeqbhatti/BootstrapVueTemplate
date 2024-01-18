<?php

return [
	'mode'                  => 'utf-8',
	'format'                => 'A4',
	'author'                => '',
	'subject'               => '',
	'keywords'              => '',
	'creator'               => 'Laravel Pdf',
	'display_mode'          => 'fullpage',
	'tempDir'               => base_path('../temp/'),
	'pdf_a'                 => false,
	'pdf_a_auto'            => false,
	'icc_profile_path'      => '',
    'auto_language_detection' => true,
    'autoScriptToLang' => true,
    'font_path' => base_path('resources/fonts/'),
	'font_data' => [
		'urdufont' => [
			'R'  => 'NotoNastaliqUrdu-Regular.ttf',
            // 'useOTL' => 0xFF,    // required for complicated langs like Persian, Arabic and Chinese
			// 'useKashida' => 75,
        ],

    ],
];
