<html dir="rtl">

<head>
    <title>Bill Of Sale</title>
    <style>
        body {
            font-family: 'XB Riyaz', sans-serif;
            font-size: 13px
        }

        @page {
            header: page-header;
            footer: page-footer;
            sheet-size: 120mm 115mm
        }

        table td {
            direction: rtl;
        }

        .header {
            text-align: center;
            width: 100%;
        }

        .sale-data {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
        }

        .sale-data tr,
        td,
        th {
            text-align: center;
        }

        .sale-data thead tr th {
            border-top: 2px solid black;
            border-bottom: 2px solid black;
        }

        .sale-data tfoot tr td {
            border-top: 2px solid black
        }
    </style>
</head>

<body>
    <header>
        <div class="header">
            <h4>
                {{ $businessDetail->name }}
            </h4>
            <p>{{$businessDetail->contact}}
            <br>
            {{$businessDetail->address}}
            </p>
        </div>
    </header>
    <main>
        <div style="margin-botton: 4px;"><strong> کسٹمر: </strong> {{ $data->customer->name }}</div>
        <div><strong> تاریخ: </strong> {{ $date }}</div>

        <table class="sale-data">
            <thead>
                <tr style="border-top: 1px solid black; border-bottom: 1px solid black">
                    <th>نمبر</th>
                    <th>پراڈکٹ</th>
                    <th>مقدار</th>
                    <th>رقم</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data->products as $index => $item)
                    <tr>
                        <td>{{ $index + 1 }}</td>
                        <td>{{ $item['name'] }}</td>
                        <td>{{ $item['quantity'] }}</td>
                        <td>{{ $item['price'] }}</td>
                    </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{ $data->total_amount }}</td>
                </tr>
            </tfoot>
        </table>

        <div style="margin-top: 10px;"><strong> کل رقم: </strong> {{ $data->total_amount }}</div>
        <div style="margin-top: 4px;"><strong> رعایت/ڈسکاؤنٹ: </strong> {{ $data->discount }}</div>
        <div style="margin-top: 4px;"><strong> ادا شدہ رقم: </strong> {{ $data->paid_amount }}</div>
    </main>
</body>

</html>
